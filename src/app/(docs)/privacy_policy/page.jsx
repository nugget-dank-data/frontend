import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 leading-10">
      <div className="top bg-[#7F56D9] text-white p-8 text-center">
        <h1 className="text-4xl font-bold">PRIVACY NOTICE</h1>
        <p>Last updated May 06, 2022</p>
      </div>
      <div className="body p-8 leading-10">
        <p class="mb-8">
          This privacy notice for Leslieville Development Group Ltd. (doing
          business as Nugget) ("Nugget," "we," "us," or "our"), describes how
          and why we might collect, store, use, and/or share ("process") your
          information when you use our services ("Services"), such as when you:
          <ul class="list-disc list-inside mb-4">
            <li>
              Visit our website at{" "}
              <a href="https://www.nuggetdata.net" target="_blank" class="link">
                https://www.nuggetdata.net
              </a>
              , or any website of ours that links to this privacy notice
            </li>
            <li>
              Engage with us in other related ways, including any sales,
              marketing, or events
            </li>
          </ul>
          <span class="font-bold">Questions or concerns?</span> Reading this
          privacy notice will help you understand your privacy rights and
          choices. If you do not agree with our policies and practices, please
          do not use our Services. If you still have any questions or concerns,
          please contact us at{" "}
          <a
            href="mailto:support@nuggetdata.net"
            className="link text-[#7F56D9]"
          >
            support@nuggetdata.net
          </a>
          .
        </p>
        {/* Table of Contents */}
        <div className="bg-[#f5f7ffda] rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-2xl font-bold mb-4">TABLE OF CONTENTS</h1>
          <ol className="list-decimal list-inside p-4 text-[1em] gap-3">
            <li className="cursor-pointer m-3 hover:text-[#7F56D9]">
              <a href="#section1">WHAT INFORMATION DO WE COLLECT?</a>
            </li>
            <li className="cursor-pointer m-3 hover:text-[#7F56D9]">
              <a href="#section2">HOW DO WE PROCESS YOUR INFORMATION?</a>
            </li>

            <li className="cursor-pointer m-3 hover:text-[#7F56D9]">
              <a href="#section3">
                WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL
                INFORMATION?
              </a>
            </li>
            <li className="cursor-pointer m-3 hover:text-[#7F56D9]">
              <a href="#section4">
                {" "}
                WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
              </a>
            </li>
            <li className="cursor-pointer m-3 hover:text-[#7F56D9]">
              <a href="#section5">
                {" "}
                DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
              </a>
            </li>
            <li className="cursor-pointer m-3 hover:text-[#7F56D9]">
              <a href="#section6">HOW LONG DO WE KEEP YOUR INFORMATION?</a>
            </li>
            <li className="cursor-pointer m-3 hover:text-[#7F56D9]">
              <a href="#section7">HOW DO WE KEEP YOUR INFORMATION SAFE?</a>
            </li>
            <li className="cursor-pointer m-3 hover:text-[#7F56D9]">
              <a href="#section8">DO WE COLLECT INFORMATION FROM MINORS?</a>
            </li>
            <li className="cursor-pointer m-3 hover:text-[#7F56D9]">
              <a href="#section9">WHAT ARE YOUR PRIVACY RIGHTS?</a>
            </li>
            <li className="cursor-pointer m-3 hover:text-[#7F56D9]">
              <a href="#section9">CONTROLS FOR DO-NOT-TRACK FEATURES</a>
            </li>
            <li className="cursor-pointer m-3 hover:text-[#7F56D9]">
              <a href="#section9">
                DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
              </a>
            </li>
            <li className="cursor-pointer m-3 hover:text-[#7F56D9]">
              <a href="#section9">DO WE MAKE UPDATES TO THIS NOTICE?</a>
            </li>
            <li className="cursor-pointer m-3 hover:text-[#7F56D9]">
              <a href="#section9">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>
            </li>
            <li className="cursor-pointer m-3 hover:text-[#7F56D9]">
              <a href="#section9">
                HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
                YOU?
              </a>
            </li>
          </ol>
        </div>

        <div className="py-8 leading-10">
          <h1 className="text-3xl font-bold mb-4">SUMMARY OF KEY POINTS</h1>
          <p className="font-semibold italic text-gray-600 leading-10">
            This summary provides key points from our privacy notice, but you
            can find out more details about any of these topics by clicking the
            link following each key point or by using our table of contents
            below to find the section you are looking for. You can also click
            here to go directly to our table of contents.
          </p>

          <div className="mt-6 leading-10">
            <h2 className="text-xl font-semibold mb-2">
              What personal information do we process?
            </h2>
            <p className="text-gray-600">
              When you visit, use, or navigate our Services, we may process
              personal information depending on how you interact with Nugget and
              the Services, the choices you make, and the products and features
              you use. Click{" "}
              <a href="#section1" className="text-blue-500">
                here{" "}
              </a>
              to learn more.
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">
              Do we process any sensitive personal information?
            </h2>
            <p className="text-gray-600">
              We do not process sensitive personal information.
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">
              Do you receive any information from third parties?
            </h2>
            <p className="text-gray-600">
              We do not receive any information from third parties.
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">
              How do you process my information?
            </h2>
            <p className="text-gray-600">
              We process your information to provide, improve, and administer
              our Services, communicate with you, for security and fraud
              prevention, and to comply with law. We may also process your
              information for other purposes with your consent. We process your
              information only when we have a valid legal reason to do so. Click{" "}
              <a href="#section2" className="text-blue-500">
                here
              </a>{" "}
              to learn more.
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">
              In what situations and with which types of parties do we share
              personal information?
            </h2>
            <p className="text-gray-600">
              We may share information in specific situations and with specific
              categories of third parties. Click{" "}
              <a href="#section4" className="text-blue-500">
                here
              </a>{" "}
              to learn more.
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">
              How do we keep your information safe?
            </h2>
            <p className="text-gray-600">
              We have organizational and technical processes and procedures in
              place to protect your personal information. However, no electronic
              transmission over the internet or information storage technology
              can be guaranteed to be 100% secure, so we cannot promise or
              guarantee that hackers, cybercriminals, or other unauthorized
              third parties will not be able to defeat our security and
              improperly collect, access, steal, or modify your information.
              Click{" "}
              <a href="#section7" className="text-blue-500">
                here{" "}
              </a>
              to learn more.
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">
              What are your rights?
            </h2>
            <p className="text-gray-600">
              Depending on where you are located geographically, the applicable
              privacy law may mean you have certain rights regarding your
              personal information. Click{" "}
              <a href="#section9" className="text-blue-500">
                here
              </a>{" "}
              to learn more.
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">
              How do I exercise my rights?
            </h2>
            <p className="text-gray-600">
              The easiest way to exercise your rights is by filling out our data
              subject request form available{" "}
              <a
                href="https://app.termly.io/notify/74b870e4-f07c-43f6-aab8-c2ef377bbaa8"
                className="text-blue-500"
              >
                here
              </a>
              , or by contacting us. We will consider and act upon any request
              in accordance with applicable data protection laws. Want to learn
              more about what Nugget does with any information we collect? Click{" "}
              <a href="#sections" className="text-blue-500">
                here
              </a>{" "}
              to review the notice in full.
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className=" p-8 mt-8">
          {/* Section 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8" id="section1">
            <h2 className="text-3xl font-bold mb-4">
              1. WHAT INFORMATION DO WE COLLECT?
            </h2>
            <p className="text-gray-600">
              Personal information you disclose to us
              <br />
              <br />
              <span className="font-bold">In Short:</span> We collect personal
              information that you provide to us.
            </p>

            <p className="text-gray-600 mt-4">
              We collect personal information that you voluntarily provide to us
              when you register on the Services, express an interest in
              obtaining information about us or our products and Services, when
              you participate in activities on the Services, or otherwise when
              you contact us.
            </p>

            <p className="text-gray-600 mt-4">
              <span className="font-bold">
                Personal Information Provided by You.
              </span>{" "}
              The personal information that we collect depends on the context of
              your interactions with us and the Services, the choices you make,
              and the products and features you use. The personal information we
              collect may include the following:
            </p>

            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>names</li>
              <li>phone numbers</li>
              <li>email addresses</li>
              <li>job titles</li>
              <li>usernames</li>
              <li>passwords</li>
              <li>contact preferences</li>
              <li>billing addresses</li>
              <li>debit/credit card numbers</li>
              <li>contact or authentication data</li>
            </ul>

            <p className="text-gray-600 mt-4">
              <span className="font-bold">Sensitive Information.</span> We do
              not process sensitive information.
            </p>

            <p className="text-gray-600 mt-4">
              All personal information that you provide to us must be true,
              complete, and accurate, and you must notify us of any changes to
              such personal information.
            </p>

            <p className="text-gray-600 mt-6">
              <span className="font-bold">
                Information automatically collected.
              </span>
              Some information — such as your Internet Protocol (IP) address
              and/or browser and device characteristics — is collected
              automatically when you visit our Services.
            </p>

            <p className="text-gray-600 mt-4">
              We automatically collect certain information when you visit, use,
              or navigate the Services. This information does not reveal your
              specific identity (like your name or contact information) but may
              include device and usage information, such as your IP address,
              browser and device characteristics, operating system, language
              preferences, referring URLs, device name, country, location,
              information about how and when you use our Services, and other
              technical information. This information is primarily needed to
              maintain the security and operation of our Services, and for our
              internal analytics and reporting purposes.
            </p>

            <p className="text-gray-600 mt-4">
              Like many businesses, we also collect information through cookies
              and similar technologies.
            </p>

            <p className="text-gray-600 mt-4">
              The information we collect includes:
            </p>

            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>
                Log and Usage Data. Log and usage data is service-related,
                diagnostic, usage, and performance information our servers
                automatically collect when you access or use our Services and
                which we record in log files. Depending on how you interact with
                us, this log data may include your IP address, device
                information, browser type, and settings and information about
                your activity in the Services (such as the date/time stamps
                associated with your usage, pages and files viewed, searches,
                and other actions you take such as which features you use),
                device event information (such as system activity, error reports
                (sometimes called "crash dumps"), and hardware settings).
              </li>
              <li>
                Device Data. We collect device data such as information about
                your computer, phone, tablet, or other device you use to access
                the Services. Depending on the device used, this device data may
                include information such as your IP address (or proxy server),
                device and application identification numbers, location, browser
                type, hardware model, Internet service provider and/or mobile
                carrier, operating system, and system configuration information.
              </li>
              <li>
                Location Data. We collect location data such as information
                about your device's location, which can be either precise or
                imprecise. How much information we collect depends on the type
                and settings of the device you use to access the Services. For
                example, we may use GPS and other technologies to collect
                geolocation data that tells us your current location (based on
                your IP address). You can opt out of allowing us to collect this
                information either by refusing access to the information or by
                disabling your Location setting on your device. However, if you
                choose to opt out, you may not be able to use certain aspects of
                the Services.
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-3xl font-bold mb-4">
              2. HOW DO WE PROCESS YOUR INFORMATION?
            </h2>
            <p className="text-gray-600">
              <span className="font-bold">In Short:</span> We process your
              information to provide, improve, and administer our Services,
              communicate with you, for security and fraud prevention, and to
              comply with the law. We may also process your information for
              other purposes with your consent.
            </p>

            <p className="text-gray-600 mt-4">
              We process your personal information for a variety of reasons,
              depending on how you interact with our Services, including:
            </p>

            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>
                To facilitate account creation and authentication and otherwise
                manage user accounts. We may process your information so you can
                create and log in to your account, as well as keep your account
                in working order.
              </li>
              <li>
                To deliver and facilitate the delivery of services to the user.
                We may process your information to provide you with the
                requested service.
              </li>
              <li>
                To respond to user inquiries/offer support to users. We may
                process your information to respond to your inquiries and solve
                any potential issues you might have with the requested service.
              </li>
              <li>
                To send administrative information to you. We may process your
                information to send you details about our products and services,
                changes to our terms and policies, and other similar
                information.
              </li>
              <li>
                To request feedback. We may process your information when
                necessary to request feedback and to contact you about your use
                of our Services.
              </li>
              <li>
                To send you marketing and promotional communications. We may
                process the personal information you send to us for our
                marketing purposes, if this is in accordance with your marketing
                preferences. You can opt out of our marketing emails at any
                time. For more information, see "WHAT ARE YOUR PRIVACY RIGHTS?"
                below).
              </li>
              <li>
                To evaluate and improve our Services, products, marketing, and
                your experience. We may process your information when we believe
                it is necessary to identify usage trends, determine the
                effectiveness of our promotional campaigns, and to evaluate and
                improve our Services, products, marketing, and your experience.
              </li>
              <li>
                To identify usage trends. We may process information about how
                you use our Services to better understand how they are being
                used so we can improve them.
              </li>
              <li>
                To comply with our legal obligations. We may process your
                information to comply with our legal obligations, respond to
                legal requests, and exercise, establish, or defend our legal
                rights.
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-8" id="section3">
            <h2 className="text-3xl font-bold mb-4">
              3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?
            </h2>
            <p className="text-gray-600">
              <span className="font-bold">In Short:</span> We only process your
              personal information when we believe it is necessary and we have a
              valid legal reason (i.e., legal basis) to do so under applicable
              law, like with your consent, to comply with laws, to provide you
              with services to enter into or fulfill our contractual
              obligations, to protect your rights, or to fulfill our legitimate
              business interests.
            </p>

            <p className="text-gray-600 mt-4">
              <span className="font-bold">
                If you are located in Canada, this section applies to you.
              </span>
            </p>

            <p className="text-gray-600 mt-4">
              We may process your information if you have given us specific
              permission (i.e., express consent) to use your personal
              information for a specific purpose, or in situations where your
              permission can be inferred (i.e., implied consent). You can
              withdraw your consent at any time. Click{" "}
              <a href="#section3-consent" className="text-blue-500">
                here
              </a>{" "}
              to learn more.
            </p>

            <p className="text-gray-600 mt-4">
              In some exceptional cases, we may be legally permitted under
              applicable law to process your information without your consent,
              including, for example:
            </p>

            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>
                If collection is clearly in the interests of an individual and
                consent cannot be obtained in a timely way
              </li>
              <li>For investigations and fraud detection and prevention</li>
              <li>
                For business transactions provided certain conditions are met
              </li>
              <li>
                If it is contained in a witness statement and the collection is
                necessary to assess, process, or settle an insurance claim
              </li>
              <li>
                For identifying injured, ill, or deceased persons and
                communicating with next of kin
              </li>
              <li>
                If we have reasonable grounds to believe an individual has been,
                is, or may be a victim of financial abuse
              </li>
              <li>
                If it is reasonable to expect collection and use with consent
                would compromise the availability or the accuracy of the
                information and the collection is reasonable for purposes
                related to investigating a breach of an agreement or a
                contravention of the laws of Canada or a province
              </li>
              <li>
                If disclosure is required to comply with a subpoena, warrant,
                court order, or rules of the court relating to the production of
                records
              </li>
              <li>
                If it was produced by an individual in the course of their
                employment, business, or profession and the collection is
                consistent with the purposes for which the information was
                produced
              </li>
              <li>
                If the collection is solely for journalistic, artistic, or
                literary purposes
              </li>
              <li>
                If the information is publicly available and is specified by the
                regulations
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-8" id="section4">
            <h2 className="text-3xl font-bold mb-4">
              4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
            </h2>
            <p className="text-gray-600">
              <span className="font-bold">In Short:</span> We may share
              information in specific situations described in this section
              and/or with the following categories of third parties.
            </p>

            <p className="text-gray-600 mt-4">
              <span className="font-bold">
                Vendors, Consultants, and Other Third-Party Service Providers.
              </span>{" "}
              We may share your data with third-party vendors, service
              providers, contractors, or agents ("third parties") who perform
              services for us or on our behalf and require access to such
              information to do that work. The categories of third parties we
              may share personal information with are as follows:
            </p>

            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>Data Analytics Services</li>
              <li>Cloud Computing Services</li>
              <li>Communication & Collaboration Tools</li>
              <li>Data Storage Service Providers</li>
              <li>Finance & Accounting Tools</li>
              <li>Payment Processors</li>
              <li>Performance Monitoring Tools</li>
              <li>Product Engineering & Design Tools</li>
              <li>Retargeting Platforms</li>
              <li>Sales & Marketing Tools</li>
              <li>Social Networks</li>
              <li>Testing Tools</li>
              <li>Website Hosting Service Providers</li>
              <li>User Account Registration & Authentication Services</li>
            </ul>

            <p className="text-gray-600 mt-4">
              We also may need to share your personal information in the
              following situations:
            </p>

            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>
                <span className="font-bold">Business Transfers.</span> We may
                share or transfer your information in connection with, or during
                negotiations of, any merger, sale of company assets, financing,
                or acquisition of all or a portion of our business to another
                company.
              </li>
              <li>
                <span className="font-bold">
                  When we use Google Maps Platform APIs.
                </span>{" "}
                We may share your information with certain Google Maps Platform
                APIs (e.g., Google Maps API, Places API). To find out more about
                Google’s Privacy Policy, please refer to this{" "}
                <a
                  href="https://policies.google.com/privacy"
                  className="text-blue-500"
                >
                  link
                </a>
                . We obtain and store on your device ("cache") your location.
                You may revoke your consent anytime by contacting us at the
                contact details provided at the end of this document.
              </li>
              <li>
                <span className="font-bold">Affiliates.</span> We may share your
                information with our affiliates, in which case we will require
                those affiliates to honor this privacy notice. Affiliates
                include our parent company and any subsidiaries, joint venture
                partners, or other companies that we control or that are under
                common control with us.
              </li>
              <li>
                <span className="font-bold">Business Partners.</span> We may
                share your information with our business partners to offer you
                certain products, services, or promotions.
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-8" id="section5">
            <h2 className="text-3xl font-bold mb-4">
              5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
            </h2>
            <p className="text-gray-600">
              <span className="font-bold">In Short:</span> We may use cookies
              and other tracking technologies to collect and store your
              information.
            </p>

            <p className="text-gray-600 mt-4">
              We may use cookies and similar tracking technologies (like web
              beacons and pixels) to access or store information. Specific
              information about how we use such technologies and how you can
              refuse certain cookies is set out in our{" "}
              <a href="#section5-cookie-notice" className="text-blue-500">
                Cookie Notice
              </a>
              .
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-8" id="section6">
            <h2 className="text-3xl font-bold mb-4">
              6. HOW LONG DO WE KEEP YOUR INFORMATION?
            </h2>
            <p className="text-gray-600">
              <span className="font-bold">In Short:</span> We keep your
              information for as long as necessary to fulfill the purposes
              outlined in this privacy notice unless otherwise required by law.
            </p>

            <p className="text-gray-600 mt-4">
              We will only keep your personal information for as long as it is
              necessary for the purposes set out in this privacy notice, unless
              a longer retention period is required or permitted by law (such as
              tax, accounting, or other legal requirements). No purpose in this
              notice will require us to keep your personal information for
              longer than twelve (12) months past the termination of the user's
              account.
            </p>

            <p className="text-gray-600 mt-4">
              When we have no ongoing legitimate business need to process your
              personal information, we will either delete or anonymize such
              information, or, if this is not possible (for example, because
              your personal information has been stored in backup archives),
              then we will securely store your personal information and isolate
              it from any further processing until deletion is possible.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-8" id="section7">
            <h2 className="text-3xl font-bold mb-4">
              7. HOW DO WE KEEP YOUR INFORMATION SAFE?
            </h2>
            <p className="text-gray-600">
              <span className="font-bold">In Short:</span> We aim to protect
              your personal information through a system of organizational and
              technical security measures.
            </p>

            <p className="text-gray-600 mt-4">
              We have implemented appropriate and reasonable technical and
              organizational security measures designed to protect the security
              of any personal information we process. However, despite our
              safeguards and efforts to secure your information, no electronic
              transmission over the Internet or information storage technology
              can be guaranteed to be 100% secure, so we cannot promise or
              guarantee that hackers, cybercriminals, or other unauthorized
              third parties will not be able to defeat our security and
              improperly collect, access, steal, or modify your information.
              Although we will do our best to protect your personal information,
              transmission of personal information to and from our Services is
              at your own risk. You should only access the Services within a
              secure environment.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-8" id="section8">
            <h2 className="text-3xl font-bold mb-4">
              8. DO WE COLLECT INFORMATION FROM MINORS?
            </h2>
            <p className="text-gray-600">
              <span className="font-bold">In Short:</span> We do not knowingly
              collect data from or market to children under 18 years of age.
            </p>

            <p className="text-gray-600 mt-4">
              We do not knowingly solicit data from or market to children under
              18 years of age. By using the Services, you represent that you are
              at least 18 or that you are the parent or guardian of such a minor
              and consent to such minor dependent’s use of the Services. If we
              learn that personal information from users less than 18 years of
              age has been collected, we will deactivate the account and take
              reasonable measures to promptly delete such data from our records.
              If you become aware of any data we may have collected from
              children under age 18, please contact us at
              support@nuggetdata.net.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-8" id="section9">
            <h2 className="text-3xl font-bold mb-4">
              9. WHAT ARE YOUR PRIVACY RIGHTS?
            </h2>
            <p className="text-gray-600">
              <span className="font-bold">In Short:</span> In some regions, such
              as Canada, you have rights that allow you greater access to and
              control over your personal information. You may review, change, or
              terminate your account at any time.
            </p>

            <p className="text-gray-600 mt-4">
              In some regions (like Canada), you have certain rights under
              applicable data protection laws. These may include the right (i)
              to request access and obtain a copy of your personal information,
              (ii) to request rectification or erasure; (iii) to restrict the
              processing of your personal information; and (iv) if applicable,
              to data portability. In certain circumstances, you may also have
              the right to object to the processing of your personal
              information. You can make such a request by contacting us by using
              the contact details provided in the section "HOW CAN YOU CONTACT
              US ABOUT THIS NOTICE?" below.
            </p>

            <p className="text-gray-600 mt-4">
              We will consider and act upon any request in accordance with
              applicable data protection laws. If you are located in the EEA or
              UK and you believe we are unlawfully processing your personal
              information, you also have the right to complain to your local
              data protection supervisory authority. You can find their contact
              details here:{" "}
              <a
                href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
                className="text-blue-500"
              >
                https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm
              </a>
              .
            </p>

            <p className="text-gray-600 mt-4">
              If you are located in Switzerland, the contact details for the
              data protection authorities are available here:{" "}
              <a
                href="https://www.edoeb.admin.ch/edoeb/en/home.html"
                className="text-blue-500"
              >
                https://www.edoeb.admin.ch/edoeb/en/home.html
              </a>
              .
            </p>

            <p className="text-gray-600 mt-4">
              <span className="font-bold">Withdrawing your consent:</span> If we
              are relying on your consent to process your personal information,
              which may be express and/or implied consent depending on the
              applicable law, you have the right to withdraw your consent at any
              time. You can withdraw your consent at any time by contacting us
              by using the contact details provided in the section "HOW CAN YOU
              CONTACT US ABOUT THIS NOTICE?" below. However, please note that
              this will not affect the lawfulness of the processing before its
              withdrawal, nor when applicable law allows, will it affect the
              processing of your personal information conducted in reliance on
              lawful processing grounds other than consent.
            </p>

            <p className="text-gray-600 mt-4">
              <span className="font-bold">
                Opting out of marketing and promotional communications:
              </span>{" "}
              You can unsubscribe from our marketing and promotional
              communications at any time by clicking on the unsubscribe link in
              the emails that we send, or by contacting us using the details
              provided in the section "HOW CAN YOU CONTACT US ABOUT THIS
              NOTICE?" below. You will then be removed from the marketing lists.
              However, we may still communicate with you — for example, to send
              you service-related messages that are necessary for the
              administration and use of your account, to respond to service
              requests, or for other non-marketing purposes.
            </p>

            <p className="text-gray-600 mt-4">
              <span className="font-bold">Account Information:</span> If you
              would at any time like to review or change the information in your
              account or terminate your account, you can:
            </p>

            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>
                Log in to your account settings and update your user account.
              </li>
              <li>Contact us using the contact information provided.</li>
            </ul>

            <p className="text-gray-600 mt-4">
              Upon your request to terminate your account, we will deactivate or
              delete your account and information from our active databases.
              However, we may retain some information in our files to prevent
              fraud, troubleshoot problems, assist with any investigations,
              enforce our legal terms and/or comply with applicable legal
              requirements.
            </p>

            <p className="text-gray-600 mt-4">
              <span className="font-bold">
                Cookies and similar technologies:
              </span>{" "}
              Most Web browsers are set to accept cookies by default. If you
              prefer, you can usually choose to set your browser to remove
              cookies and to reject cookies. If you choose to remove cookies or
              reject cookies, this could affect certain features or services of
              our Services. To opt out of interest-based advertising by
              advertisers on our Services visit{" "}
              <a
                href="http://www.aboutads.info/choices/"
                className="text-blue-500"
              >
                http://www.aboutads.info/choices/
              </a>
              .
            </p>

            <p className="text-gray-600 mt-4">
              If you have questions or comments about your privacy rights, you
              may email us at support@nuggetdata.net.
            </p>
          </div>

          <div
            className="bg-white rounded-lg shadow-lg p-6 mb-8"
            id="section10"
          >
            <h2 className="text-3xl font-bold mb-4">
              10. CONTROLS FOR DO-NOT-TRACK FEATURES
            </h2>
            <p className="text-gray-600">
              Most web browsers and some mobile operating systems and mobile
              applications include a Do-Not-Track ("DNT") feature or setting you
              can activate to signal your privacy preference not to have data
              about your online browsing activities monitored and collected. At
              this stage, no uniform technology standard for recognizing and
              implementing DNT signals has been finalized. As such, we do not
              currently respond to DNT browser signals or any other mechanism
              that automatically communicates your choice not to be tracked
              online. If a standard for online tracking is adopted that we must
              follow in the future, we will inform you about that practice in a
              revised version of this privacy notice.
            </p>
          </div>

          <div
            className="bg-white rounded-lg shadow-lg p-6 mb-8 justify-between"
            id="section11"
          >
            <h2 className="text-3xl font-bold mb-4">
              11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
            </h2>
            <p className="text-gray-600">
              <span className="font-bold">In Short:</span> Yes, if you are a
              resident of California, you are granted specific rights regarding
              access to your personal information.
            </p>

            <h3 className="text-xl font-bold mt-4">CCPA Privacy Notice</h3>
            <p className="text-gray-600 mt-2">
              The California Code of Regulations defines a "resident" as:
            </p>
            <ol className="list-decimal list-inside text-gray-600 mt-2">
              <li>
                every individual who is in the State of California for other
                than a temporary or transitory purpose and
              </li>
              <li>
                every individual who is domiciled in the State of California who
                is outside the State of California for a temporary or transitory
                purpose
              </li>
            </ol>
            <p className="text-gray-600 mt-2">
              All other individuals are defined as "non-residents."
            </p>

            <p className="text-gray-600 mt-4">
              If this definition of "resident" applies to you, we must adhere to
              certain rights and obligations regarding your personal
              information.
            </p>

            <h3 className="text-xl font-bold mt-4">
              What categories of personal information do we collect?
            </h3>
            {/* Include the table here */}
            <table className="border-collapse border border-gray-300 w-full mt-4">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 p-2">Category</th>
                  <th className="border border-gray-300 p-2">Examples</th>
                  <th className="border border-gray-300 p-2">Collected</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">A. Identifiers</td>
                  <td className="border border-gray-300 p-2">
                    Contact details, such as real name, alias, postal address,
                    telephone or mobile contact number, unique personal
                    identifier, online identifier, Internet Protocol address,
                    email address, and account name
                  </td>
                  <td className="border border-gray-300 p-2">YES</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">
                    B. Personal information categories listed in the California
                    Customer Records statute
                  </td>
                  <td className="border border-gray-300 p-2">
                    Name, contact information, education, employment, employment
                    history, and financial information
                  </td>
                  <td className="border border-gray-300 p-2">YES</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">
                    C. Protected classification characteristics under California
                    or federal law
                  </td>
                  <td className="border border-gray-300 p-2">
                    Gender and date of birth
                  </td>
                  <td className="border border-gray-300 p-2">YES</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 p-2">
                    D. Commercial information
                  </td>
                  <td className="border border-gray-300 p-2">
                    Transaction information, purchase history, financial
                    details, and payment information
                  </td>
                  <td className="border border-gray-300 p-2">NO</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">
                    E. Biometric information
                  </td>
                  <td className="border border-gray-300 p-2">
                    Fingerprints and voiceprints
                  </td>
                  <td className="border border-gray-300 p-2">NO</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">
                    F. Internet or other similar network activity
                  </td>
                  <td className="border border-gray-300 p-2">
                    Browsing history, search history, online behavior, interest
                    data, and interactions with our and other websites,
                    applications, systems, and advertisements
                  </td>
                  <td className="border border-gray-300 p-2">NO</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">
                    G. Geolocation data
                  </td>
                  <td className="border border-gray-300 p-2">
                    Device location
                  </td>
                  <td className="border border-gray-300 p-2">NO</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">
                    H. Audio, electronic, visual, thermal, olfactory, or similar
                    information
                  </td>
                  <td className="border border-gray-300 p-2">
                    Images and audio, video or call recordings created in
                    connection with our business activities
                  </td>
                  <td className="border border-gray-300 p-2">NO</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">
                    I. Professional or employment-related information
                  </td>
                  <td className="border border-gray-300 p-2">
                    Business contact details in order to provide you our
                    services at a business level or job title, work history, and
                    professional qualifications if you apply for a job with us
                  </td>
                  <td className="border border-gray-300 p-2">NO</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">
                    J. Education Information
                  </td>
                  <td className="border border-gray-300 p-2">
                    Student records and directory information
                  </td>
                  <td className="border border-gray-300 p-2">NO</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">
                    K. Inferences drawn from other personal information
                  </td>
                  <td className="border border-gray-300 p-2">
                    Inferences drawn from any of the collected personal
                    information listed above to create a profile or summary
                    about, for example, an individual’s preferences and
                    characteristics
                  </td>
                  <td className="border border-gray-300 p-2">NO</td>
                </tr>
              </tbody>
            </table>

            <p className="text-gray-600 mt-4">
              We may also collect other personal information outside of these
              categories in instances where you interact with us in person,
              online, or by phone or mail in the context of:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>Receiving help through our customer support channels;</li>
              <li>Participation in customer surveys or contests; and</li>
              <li>
                Facilitation in the delivery of our Services and to respond to
                your inquiries.
              </li>
            </ul>

            <h3 className="text-xl font-bold mt-4">
              How do we use and share your personal information?
            </h3>
            <p className="text-gray-600 mt-2">
              Leslieville Development Group Ltd. collects and shares your
              personal information through:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>Targeting cookies/Marketing cookies</li>
              <li>Social media cookies</li>
            </ul>
            <p className="text-gray-600 mt-2">
              More information about our data collection and sharing practices
              can be found in this privacy notice.
            </p>

            <p className="text-gray-600 mt-4">
              You may contact us by email at support@nuggetdata.net, or by
              referring to the contact details at the bottom of this document.
            </p>

            <p className="text-gray-600 mt-4">
              If you are using an authorized agent to exercise your right to
              opt-out, we may deny a request if the authorized agent does not
              submit proof that they have been validly authorized to act on your
              behalf.
            </p>

            <h3 className="text-xl font-bold mt-4">
              Will your information be shared with anyone else?
            </h3>
            <p className="text-gray-600 mt-2">
              We may disclose your personal information with our service
              providers pursuant to a written contract between us and each
              service provider. Each service provider is a for-profit entity
              that processes the information on our behalf.
            </p>
            <p className="text-gray-600 mt-2">
              We may use your personal information for our own business
              purposes, such as for undertaking internal research for
              technological development and demonstration. This is not
              considered to be "selling" of your personal information.
            </p>
            <p className="text-gray-600 mt-2">
              Leslieville Development Group Ltd. has not sold any personal
              information to third parties for a business or commercial purpose
              in the preceding twelve (12) months. Leslieville Development Group
              Ltd. has disclosed the following categories of personal
              information to third parties for a business or commercial purpose
              in the preceding twelve (12) months:
            </p>
            <p className="text-gray-600 mt-2">
              Category B. Personal information, as defined in the California
              Customer Records law, such as your name, contact information,
              education, employment, employment history, and financial
              information.
            </p>

            <p className="text-gray-600 mt-4">
              The categories of third parties to whom we disclosed personal
              information for a business or commercial purpose can be found
              under{" "}
              <a href="#section4" className="text-[#7F56D9]">
                {" "}
                "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?"
              </a>
            </p>

            <div className=" justify-evenly">
              <h3 className="text-xl font-bold mt-4">
                Your rights with respect to your personal data
              </h3>
              <p className="text-gray-600 mt-2">
                <span className="font-bold underline text-[0.9em] mb-2 ml-2">
                  Right to request deletion of the data — Request to delete
                </span>
                <br />
                You can ask for the deletion of your personal information. If
                you ask us to delete your personal information, we will respect
                your request and delete your personal information, subject to
                certain exceptions provided by law, such as (but not limited to)
                the exercise by another consumer of his or her right to free
                speech, our compliance requirements resulting from a legal
                obligation, or any processing that may be required to protect
                against illegal activities.
              </p>
              <p className="text-gray-600 mt-2 justify-center">
                <span className="font-bold underline text-[0.9em] mb-2 ml-2">
                  Right to be informed — Request to know
                </span>
                <br />
                Depending on the circumstances, you have a right to know:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2 ml-6">
                <li>whether we collect and use your personal information;</li>
                <li>the categories of personal information that we collect;</li>
                <li>
                  the purposes for which the collected personal information is
                  used;
                </li>
                <li>
                  whether we sell your personal information to third parties;
                </li>
                <li>
                  the categories of personal information that we sold or
                  disclosed for a business purpose;
                </li>
                <li>
                  the categories of third parties to whom the personal
                  information was sold or disclosed for a business purpose; and
                </li>
                <li>
                  the business or commercial purpose for collecting or selling
                  personal information.
                </li>
              </ul>
              <p className="text-gray-600 mt-2">
                In accordance with applicable law, we are not obligated to
                provide or delete consumer information that is de-identified in
                response to a consumer request or to re-identify individual data
                to verify a consumer request.
              </p>

              <p className="text-gray-600 mt-2">
                <span className="font-bold underline text-[0.9em] mb-2">
                  Right to Non-Discrimination for the Exercise of a Consumer’s
                  Privacy Rights
                </span>
                <br />
                We will not discriminate against you if you exercise your
                privacy rights.
              </p>

              <h3 className="text-xl font-bold mt-4 underline mb-2 ">
                Verification process
              </h3>
              <p className="text-gray-600 mt-2">
                Upon receiving your request, we will need to verify your
                identity to determine you are the same person about whom we have
                the information in our system. These verification efforts
                require us to ask you to provide information so that we can
                match it with information you have previously provided us. For
                instance, depending on the type of request you submit, we may
                ask you to provide certain information so that we can match the
                information you provide with the information we already have on
                file, or we may contact you through a communication method
                (e.g., phone or email) that you have previously provided to us.
                We may also use other verification methods as the circumstances
                dictate.
              </p>
              <p className="text-gray-600 mt-2">
                We will only use personal information provided in your request
                to verify your identity or authority to make the request. To the
                extent possible, we will avoid requesting additional information
                from you for the purposes of verification. However, if we cannot
                verify your identity from the information already maintained by
                us, we may request that you provide additional information for
                the purposes of verifying your identity and for security or
                fraud-prevention purposes. We will delete such additionally
                provided information as soon as we finish verifying you.
              </p>

              <h3 className="font-bold mt-4 underline text-[0.9em] mb-2">
                Other privacy rights
              </h3>

              <ul className="list-inside list-disc">
                <li className="text-gray-600 mt-2">
                  You may object to the processing of your personal information.
                </li>
                <li className="text-gray-600 mt-2">
                  You may request correction of your personal data if it is
                  incorrect or no longer relevant, or ask to restrict the
                  processing of the information.
                </li>
                <li className="text-gray-600 mt-2">
                  You can designate an authorized agent to make a request under
                  the CCPA on your behalf. We may deny a request from an
                  authorized agent that does not submit proof that they have
                  been validly authorized to act on your behalf in accordance
                  with the CCPA.
                </li>
                <li className="text-gray-600 mt-2">
                  You may request to opt out from future selling of your
                  personal information to third parties. Upon receiving an
                  opt-out request, we will act upon the request as soon as
                  feasibly possible, but no later than fifteen (15) days from
                  the date of the request submission.
                </li>

                <li className="text-gray-600 mt-2">
                  To exercise these rights, you can contact us by email at
                  support@nuggetdata.net, or by referring to the contact details
                  at the bottom of this document. If you have a complaint about
                  how we handle your data, we would like to hear from you.
                </li>
              </ul>
            </div>
          </div>

          <div
            className="bg-white rounded-lg shadow-lg p-6 mb-8"
            id="section12"
          >
            <h2 className="text-3xl font-bold mb-4">
              12. DO WE MAKE UPDATES TO THIS NOTICE?
            </h2>
            <p className="text-gray-600 italic">
              <span className="font-bold italic">In Short:</span> Yes, we will
              update this notice as necessary to stay compliant with relevant
              laws.
            </p>
            <p className="text-gray-600 mt-2">
              We may update this privacy notice from time to time. The updated
              version will be indicated by an updated "Revised" date and the
              updated version will be effective as soon as it is accessible. If
              we make material changes to this privacy notice, we may notify you
              either by prominently posting a notice of such changes or by
              directly sending you a notification. We encourage you to review
              this privacy notice frequently to be informed of how we are
              protecting your information.
            </p>
          </div>

          <div
            className="bg-white rounded-lg shadow-lg p-6 mb-8"
            id="section13"
          >
            <h2 className="text-3xl font-bold mb-4">
              13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </h2>
            <p className="text-gray-600">
              If you have questions or comments about this notice, you may email
              us at{" "}
              <a
                href="mailto:support@nuggetdata.net"
                className="text-blue-600 underline"
              >
                support@nuggetdata.net
              </a>{" "}
              or by post to:
            </p>
            <p className="text-gray-600 mt-2">
              Leslieville Development Group Ltd. <br />
              637 Lakeshore Blvd W <br />
              Toronto, Ontario M5V 3J6 <br />
              Canada
            </p>
          </div>

          <div
            className="bg-white rounded-lg shadow-lg p-6 mb-8"
            id="section14"
          >
            <h2 className="text-3xl font-bold mb-4">
              14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
              YOU?
            </h2>
            <p className="text-gray-600">
              Based on the applicable laws of your country, you may have the
              right to request access to the personal information we collect
              from you, change that information, or delete it in some
              circumstances. To request to review, update, or delete your
              personal information, please submit a request form by clicking{" "}
              <a
                href="https://app.termly.io/notify/74b870e4-f07c-43f6-aab8-c2ef377bbaa8"
                className="text-blue-600 underline"
              >
                here
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
