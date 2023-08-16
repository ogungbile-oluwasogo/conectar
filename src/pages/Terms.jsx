import style from "./AboutUs.module.css";

const Terms = () => {
  return (
    <div className={style["aboutus-container"]}>
      <h4>Terms of Service:</h4>
      <p>
        Welcome to Conectar! These Terms of Service govern your use of the
        Conectar website and services, so please read them carefully before
        using our platform. By accessing or using Conectar, you agree to be
        bound by these Terms.
      </p>
      <h4>Overview</h4>
      <p>
        Conectar is a platform that connects service providers with their
        recipients and acts as an escrow service to ensure safe and secure
        transactions. Conectar does not provide the actual services; it merely
        facilitates the connection between Providers and Recipients. The use of
        Conectar is subject to compliance with these Terms, as well as any
        additional guidelines or rules posted on the platform.
      </p>
      <h4>Registration and Account</h4>
      <p>
        To use Conectar, you must create an account and provide accurate and
        complete information. You are responsible for maintaining the security
        of your account and any actions taken through your account. You must be
        at least 18 years old to use Conectar. If you are under 18, you may only
        use Conectar under the supervision of a parent or legal guardian.
      </p>
      <h4>Service Requests and Engagements</h4>
      <p>
        Recipients can post service requests detailing their requirements and
        preferences. Providers can submit proposals or quotes for service
        engagements based on the posted requests. Recipients have the sole
        discretion to accept or decline proposals from Providers. Once a
        proposal is accepted, the Recipient and Provider enter into a direct
        contractual relationship.
      </p>
      <span style={{ color: "blue", marginLeft: "40px" }}>NOTE: </span>
      <span style={{ color: "red" }}>
        Conectar is not a party to any agreements or contracts between
        Recipients and Providers.
      </span>
      <br />
      <br />
      <h4>Escrow Service </h4>
      <p>
        Conectar acts as an escrow service by holding funds in a secure account
        until certain conditions are met. Funds are released to the Provider
        upon satisfactory completion of the agreed-upon services, as confirmed
        by the Recipient. In the event of a dispute, Conectar may mediate
        between the parties to reach a resolution.
      </p>
      <h4>Fees</h4>
      <p>
        Conectar charges a service fee for each transaction conducted on the
        platform. The fee is a percentage of the total transaction amount and
        will be clearly displayed before the engagement is confirmed. Any
        additional payment processing fees may apply and will be disclosed to
        the parties.
      </p>
      <h4>Prohibited Activities</h4>
      <p>
        Users must not use Conectar for any illegal or unauthorized purposes.
        Users must not violate any applicable laws, regulations, or third-party
        rights. Users must not engage in any fraudulent or deceptive practices
        on the platform. Sharing personal contact information (phone
        number,emails or social media handle) outside of Conectar is not
        allowed. As such, all negotiation must start and end on Conectar.
        Conectar reserves the right to permanently suspend accounts that violate
        these Terms.
      </p>
      <h4>Intellectual Property</h4>
      <p>
        Conectar retains all intellectual property rights associated with the
        platform. Users must not use, modify, or distribute any copyrighted
        material without obtaining permission from the respective owner.
      </p>
      <h4>Limitation of Liability</h4>
      <p>
        Conectar is not responsible for any damages or losses incurred as a
        result of using the platform or engaging with other users. Users are
        solely responsible for their interactions and agreements with other
        users. Conectar is not responsible for any communication that may occur
        between the recipient and service provider outside the platform.
      </p>
      <h4>Termination</h4>
      <p>
        You may terminate your Conectar account at any time by contacting our
        support team. Conectar reserves the right to suspend or terminate your
        account if you violate these Terms or engage in any prohibited
        activities. Upon termination, any ongoing transactions or agreements
        will be handled according to the agreed-upon terms between the Recipient
        and Provider or as decided by the Conectar team.
      </p>
      <h4>Modifications to the Terms</h4>
      <p>
        Conectar may update or modify these Terms from time to time. Users will
        be notified of any material changes to the Terms via email or through
        the platform. Continued use of Conectar after the modifications will
        constitute your acceptance of the revised Terms.
      </p>
      <h4>Governing Law and Dispute Resolution</h4>
      <p>
        These Terms are governed by and construed in accordance with the laws of
        the Federal Republic of Nigeria. Any disputes arising out of or relating
        to these Terms or the use of Conectar will be resolved through
        arbitration or in cour
      </p>
    </div>
  );
};

export default Terms;
