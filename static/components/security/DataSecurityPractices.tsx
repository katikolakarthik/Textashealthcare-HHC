'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const DataSecurityPractices = () => {
  const [activeTab, setActiveTab] = useState('Data Security')

  const securityPractices = {
    'Data Security': [
      {
        title: "Data Encryption",
        description: "Encryption of stored data, data in transit, and emails containing PHI/PII, emphasizing access via encrypted connections."
      },
      {
        title: "Virus and Malware Protection",
        description: "Use of high-security firewalls to restrict information movement and anti-virus technology for endpoint protection."
      },
      {
        title: "Network Segmentation",
        description: "Segregated internet access for sensitive data tasks, with dedicated networks and computers for safety."
      },
      {
        title: "E-mail Security",
        description: "Strict control over information outflow, allowing emails only to whitelisted addresses or customer domains."
      },
      {
        title: "Password Policy",
        description: "Requirement for mandatory complex passwords for employee login IDs and periodic password changes."
      },
      {
        title: "Continuous Threat Monitoring",
        description: "Proactive monitoring of network perimeters for unauthorized access and readiness to implement incident response procedures."
      }
    ],
    'Physical Security': [
      {
        title: "Access Control",
        description: "Strict physical access controls with biometric authentication and key card systems for facility entry."
      },
      {
        title: "Surveillance Systems",
        description: "24/7 CCTV monitoring and security personnel to ensure physical protection of data centers."
      },
      {
        title: "Environmental Controls",
        description: "Climate-controlled environments with fire suppression systems and backup power generators."
      },
      {
        title: "Secure Disposal",
        description: "Proper disposal procedures for physical documents and hardware containing sensitive information."
      },
      {
        title: "Visitor Management",
        description: "Comprehensive visitor registration and escort procedures for all facility access."
      },
      {
        title: "Asset Tracking",
        description: "Real-time tracking of all physical assets and equipment containing sensitive data."
      }
    ],
    'Training': [
      {
        title: "Security Awareness",
        description: "Regular training sessions on data security best practices and threat recognition for all employees."
      },
      {
        title: "HIPAA Compliance Training",
        description: "Comprehensive training on HIPAA regulations and proper handling of patient health information."
      },
      {
        title: "Phishing Awareness",
        description: "Training to identify and report phishing attempts and social engineering attacks."
      },
      {
        title: "Incident Response",
        description: "Regular drills and training on incident response procedures and escalation protocols."
      },
      {
        title: "Password Security",
        description: "Training on creating strong passwords and maintaining secure authentication practices."
      },
      {
        title: "Data Handling",
        description: "Training on proper data handling, storage, and transmission procedures."
      }
    ],
    'New Recruit Policy': [
      {
        title: "Background Verification",
        description: "Comprehensive background checks including criminal history, employment verification, and reference checks."
      },
      {
        title: "Security Clearance",
        description: "Multi-level security clearance process with ongoing monitoring and periodic re-evaluation."
      },
      {
        title: "Non-Disclosure Agreements",
        description: "Mandatory signing of comprehensive NDAs and confidentiality agreements before access."
      },
      {
        title: "Access Provisioning",
        description: "Principle of least privilege access with role-based permissions and regular access reviews."
      },
      {
        title: "Security Training",
        description: "Mandatory security training completion before access to any systems or data."
      },
      {
        title: "Monitoring Period",
        description: "Initial monitoring period with enhanced supervision and gradual access provisioning."
      }
    ]
  }

  const navItems = ['Data Security', 'Physical Security', 'Training', 'New Recruit Policy']

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-red-500">data security</span> practices
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Navigation */}
          <motion.div
            className="lg:w-1/4"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-3">
              {navItems.map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => setActiveTab(item)}
                  className={`w-full p-4 rounded-lg text-left font-medium transition-all duration-300 ${
                    activeTab === item
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Content Cards */}
          <motion.div
            className="lg:w-3/4"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {securityPractices[activeTab as keyof typeof securityPractices]?.map((practice, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {practice.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {practice.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default DataSecurityPractices 