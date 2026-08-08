<script setup lang="ts">
import { reactive, ref } from 'vue'
import InnerHero from '../components/common/InnerHero.vue'
import { images, site } from '../data/site'

const serviceOptions = ['Ocean Freight', 'Air Freight', 'Rail Freight', 'Road Freight', 'Value-Added Services']
const formSubmitEndpoint = `https://formsubmit.co/ajax/${site.email}`
const status = ref<'idle' | 'loading' | 'success' | 'error'>('idle')
const error = ref('')
const form = reactive({
  fullName: '',
  companyName: '',
  businessEmail: '',
  phone: '',
  serviceNeeded: 'Ocean Freight',
  cargoType: '',
  origin: '',
  destination: '',
  message: '',
  honey: '',
})

function resetForm() {
  form.fullName = ''
  form.companyName = ''
  form.businessEmail = ''
  form.phone = ''
  form.serviceNeeded = serviceOptions[0]
  form.cargoType = ''
  form.origin = ''
  form.destination = ''
  form.message = ''
  form.honey = ''
}

async function submitQuote() {
  if (status.value === 'loading') return
  if (form.honey) {
    status.value = 'success'
    return
  }

  status.value = 'loading'
  error.value = ''
  const controller = new AbortController()
  const timeoutId = window.setTimeout(() => controller.abort(), 15000)
  const payload = {
    'Full Name': form.fullName,
    'Company Name': form.companyName,
    'Business Email': form.businessEmail,
    'Phone / WhatsApp': form.phone,
    'Service Needed': form.serviceNeeded,
    'Cargo Type': form.cargoType,
    Origin: form.origin,
    Destination: form.destination,
    Message: form.message,
    _subject: 'New Quote Request from CHIROPE Website',
    _captcha: 'false',
    _template: 'table',
    _honey: form.honey,
  }
  try {
    const response = await fetch(formSubmitEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    })
    const result = await response.json().catch(() => null)
    if (!response.ok || result?.success === false || result?.success === 'false') {
      throw new Error(result?.message || 'Request failed')
    }
    resetForm()
    status.value = 'success'
  } catch (caughtError) {
    status.value = 'error'
    error.value =
      caughtError instanceof DOMException && caughtError.name === 'AbortError'
        ? 'The request timed out. Please try again or email official@chirope.cn directly.'
        : 'We could not send the request. Please check your details or email official@chirope.cn directly.'
  } finally {
    window.clearTimeout(timeoutId)
  }
}
</script>

<template>
  <main>
    <InnerHero title="Get A Quote" subtitle="Share cargo details and receive practical route guidance." :image="images.seaContact" />
    <section class="quote-page">
      <aside>
        <h2>24-hour freight consultation</h2>
        <a :href="`mailto:${site.email}`">{{ site.email }}</a>
        <p>Tell us the cargo type, origin, destination and timing requirement. The team will review the shipment profile and respond with next steps.</p>
      </aside>
      <div v-if="status === 'success'" class="thank-you">
        <h2>Thank You</h2>
        <p>Your quote request has been sent. CHIROPE will review the cargo details and reply by email.</p>
        <RouterLink to="/">Back to Home</RouterLink>
      </div>
      <form v-else class="quote-form" :action="formSubmitEndpoint" method="POST" @submit.prevent="submitQuote">
        <input v-model="form.honey" class="hidden-field" type="text" name="_honey" tabindex="-1" autocomplete="off" />
        <input type="hidden" name="_subject" value="New Quote Request from CHIROPE Website" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <label>Full Name<input v-model="form.fullName" name="Full Name" autocomplete="name" required /></label>
        <label>Company Name<input v-model="form.companyName" name="Company Name" autocomplete="organization" required /></label>
        <label>Business Email<input v-model="form.businessEmail" name="Business Email" type="email" autocomplete="email" required /></label>
        <label>Phone / WhatsApp<input v-model="form.phone" name="Phone / WhatsApp" autocomplete="tel" /></label>
        <label>
          Service Needed
          <select v-model="form.serviceNeeded" name="Service Needed">
            <option v-for="item in serviceOptions" :key="item">{{ item }}</option>
          </select>
        </label>
        <label>Cargo Type<input v-model="form.cargoType" name="Cargo Type" /></label>
        <label>Origin<input v-model="form.origin" name="Origin" required /></label>
        <label>Destination<input v-model="form.destination" name="Destination" required /></label>
        <label class="full">Message<textarea v-model="form.message" name="Message" rows="5"></textarea></label>
        <p v-if="error" class="form-error" role="alert" aria-live="polite">{{ error }}</p>
        <button type="submit" :disabled="status === 'loading'">{{ status === 'loading' ? 'Sending...' : 'Submit' }}</button>
      </form>
    </section>
  </main>
</template>
