import { memo } from "react";
import { motion } from "framer-motion";
import { Shield, Users, Award } from "lucide-react";
import { MotionSection } from "@/components/MotionSection";

const WhyChooseUsSection = memo(() => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const cards = [
    {
      title: "Armada Prima & Andal",
      icon: Shield,
      points: [
        "Unit alat berat modern dengan pemeliharaan rutin",
        "Jaminan operasional tinggi dan minim downtime",
        "Dukungan suku cadang dan tim mekanik siap siaga",
        "Ketersediaan beragam jenis alat untuk berbagai kebutuhan",
      ],
    },
    {
      title: "Keahlian & Standar Safety",
      icon: Users,
      points: [
        "Didukung tenaga ahli dan operator bersertifikat",
        "Komitmen tinggi terhadap Kesehatan & Keselamatan Kerja (K3)",
        "Pengalaman lebih dari 3 dekade di industri",
        "Solusi teknis yang presisi untuk tantangan lapangan",
      ],
    },
    {
      title: "Mitra Terpercaya",
      icon: Award,
      points: [
        "Sinergi layanan satu atap: Rental Alat & Jasa Konstruksi",
        "Dipercaya oleh perusahaan tambang terkemuka & pemerintah",
        "Jaringan operasional strategis di Kalimantan",
        "Komitmen pada integritas dan kepuasan mitra kerja",
      ],
    },
  ];

  return (
    <MotionSection id="why-choose-us" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="heading-lg text-foreground mb-4"
            variants={item}
          >
            Mengapa Memilih Kami
          </motion.h2>
          <motion.p className="text-large text-muted-foreground" variants={item}>
            Temukan keunggulan yang menjadikan kami partner ideal untuk solusi
            heavy equipment dan konstruksi tambang Anda
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {cards.map((card, index) => (
            <motion.div key={index} variants={item} className="h-full">
              <div className="bg-card border border-border/50 rounded-2xl p-8 h-full shadow-sm hover:shadow-lg hover:border-accent/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                  <card.icon className="h-6 w-6 text-accent" />
                </div>

                <h4 className="text-xl font-bold text-foreground mb-4">
                  {card.title}
                </h4>

                <ul className="space-y-3">
                  {card.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </MotionSection>
  );
});

export default WhyChooseUsSection;

