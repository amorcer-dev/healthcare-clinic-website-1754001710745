import React from 'react';
import { WidgetProfile } from '@/components/WidgetProfile'
import { WidgetVideo } from '@/components/WidgetVideo'
import { WidgetAboutDoctor } from '@/components/WidgetAboutDoctor'
import { WidgetServicesAndConditions } from '@/components/WidgetServicesAndConditions'
import { WidgetTestimonialCarousel } from '@/components/WidgetTestimonialCarousel'
import { WidgetPricesAndPackages } from '@/components/WidgetPricesAndPackages'
import { WidgetBookConsultation } from '@/components/WidgetBookConsultation'
import { WidgetInsurances } from '@/components/WidgetInsurances'
import { WidgetMessageDoctor } from '@/components/WidgetMessageDoctor'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Widget - Left Column */}
          <div className="md:col-span-1">
                    <WidgetProfile {...{"profileImage":"/default-profile.jpg","name":"Dr. Sarah ","credentials":"MD, FACS","specialty":"Cardiologist","location":"123 Medical Center Dr, Healthcare City, HC 12345","rating":"4.9","reviewCount":127,"experience":"10+ years","languages":["English","Spanish"],"education":[{"college":"Harvard Medical School","activity":"MD"},{"college":"Johns Hopkins University","activity":"Residency"}],"hospitalAffiliations":[{"hospital":"Mount Sinai Hospital"},{"hospital":"NYU Langone Health"}],"boardCertificates":[{"certificate":"American Board of Internal Medicine"},{"certificate":"Cardiovascular Disease"}]}} />
          </div>
          
          {/* Main Content - Right Columns */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Column 1 */}
              <div className="space-y-6">
                        <WidgetVideo {...{"videoUrl":"https://www.youtube.com/embed/dQw4w9WgXcQ","title":"Meet Dr. Bellamy","description":"Learn more about our approach to patient care"}} />
        <WidgetAboutDoctor {...{"aboutText":"Dr. Smith is a board-certified cardiologist with over 15 years of experience in treating cardiovascular diseases.","education":[{"college":"Harvard Medical School","activity":"MD"},{"college":"Johns Hopkins University","activity":"Residency"}],"hospitals":["Massachusetts General Hospital","Johns Hopkins Hospital"],"certificates":["Board Certified Family Medicine","Telemedicine Certification"],"languages":["English","Spanish","French"]}} />
        <WidgetServicesAndConditions {...{"specializedServices":[{"name":"Annual Physicals","icon":""},{"name":"Chronic Disease Management","icon":""},{"name":"Mental Health","icon":""}],"conditions":["Diabetes","Hypertension","Depression","Anxiety"]}} />
        <WidgetTestimonialCarousel {...{"testimonials":[{"quote":"Dr. Smith is amazing! Very thorough and caring.","author":"Sarah J.","age":45,"condition":"Diabetes Management","rating":5},{"quote":"Convenient telehealth visits that actually work.","author":"Mike C.","age":45,"condition":"Annual Physical","rating":5},{"quote":"Professional, knowledgeable, and easy to talk to.","author":"Emily D.","age":45,"condition":"Mental Health","rating":5}]}} />
              </div>
              
              {/* Column 2 */}
              <div className="space-y-6">
                        <WidgetPricesAndPackages {...{"consultationPricing":[{"name":"Initial Consultation","price":"$150"},{"name":"Follow-up Visit","price":"$100"},{"name":"Message Consultation","price":"$25"}],"packages":[{"name":"Diabetes Management","price":"$250","features":["2 visits free","Chat access 24x7","Diabetes Management"]},{"name":"Chronic Care Management","price":"$300","features":["Monthly check-ins","Medication management","Lifestyle coaching"]}]}} />
        <WidgetBookConsultation {...{"consultationImage":"/consultation-image.jpg","title":"Book Your Consultation","description":"Schedule a personal consultation with me to discuss your concerns, get expert advice, and create a care plan tailored just for you.","buttonText":"Book Now","availability":"Next available: Tomorrow at 2:00 PM"}} />
        <WidgetInsurances {...{"selectedInsurances":[{"name":"Blue Cross Blue Shield","logo":"/insurance-logos/bcbs.png"},{"name":"Aetna","logo":"/insurance-logos/aetna.png"},{"name":"Cigna","logo":"/insurance-logos/cigna.png"},{"name":"UnitedHealth","logo":"/insurance-logos/unitedhealth.png"}],"paymentOptions":[{"name":"Insurance copay/deductible"},{"name":"Health Savings Account (HSA)"},{"name":"Flexible Spending Account (FSA)"},{"name":"Cash/Credit card"},{"name":"Payment plans available"}],"insuranceQuestions":{"description":"Our billing team is available to help with insurance questions and payment arrangements.","phone":"(555) 123-4567","email":"billing@drmitchell.com","hours":"Mon-Fri 9AM-5PM EST"}}} />
        <WidgetMessageDoctor {...{"title":"Message Your Doctor","description":"Send me a secure message about your health concerns, medication questions, or any other medical inquiries. I'll respond within 24 hours.","buttonText":"Send Message","responseTime":"Response within 24 hours"}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}