import SectionTitle from "../components/SectionTitle.jsx";
import CertificateCard from "../components/CertificateCard.jsx";
import certificates from "../data/certificates.js";

export default function Certificates() {
  return (
    <div className="container-page py-16 sm:py-20">
      <SectionTitle
        index="07"
        title="Certificates"
        description="Courses and training I've completed. Tap any card to view the full certificate."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate, index) => (
          <CertificateCard key={certificate.id} certificate={certificate} index={index} />
        ))}
      </div>
    </div>
  );
}
