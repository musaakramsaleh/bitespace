import React from "react";
import Image from "next/image";
import bg from "@/assets/Testimonials_Frame.png";

// Avatars
import sarah from "@/assets/avatar-1.png";
import james from "@/assets/avatar-2.png";
import alex from "@/assets/avatar-3.png";

const Community = () => {
  const testimonials = [
    {
      avatar: sarah,
      name: "Sarah M.",
      role: "Enthusiastic Learner",
      quote:
        '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
    },
    {
      avatar: james,
      name: "James L.",
      role: "Lifelong Learner",
      quote:
        '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
    },
    {
      avatar: alex,
      name: "Alex B.",
      role: "Inspired Creator",
      quote:
        '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
    },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      {/* --- Background Image --- */}
      <Image
        src={bg}
        alt=""
        priority
        fill
        className="pointer-events-none absolute inset-0 -z-10 object-cover"
      />

      {/* --- Content --- */}
      <div className="mx-auto max-w-[1200px] px-4 py-16 md:py-18">
        {/* --- Header: Title Left / Description Right --- */}
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-2 lg:gap-16">
          <h2 className="max-w-[480px] text-3xl font-bold leading-tight tracking-tight text-[#040819] sm:text-4xl md:text-[44px]">
            Discover What Our
            <br />
            Community Is Saying
          </h2>

          <p className="max-w-[520px] text-sm leading-relaxed text-[#4F4F4F] sm:text-base lg:pt-3">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* --- Testimonial Cards --- */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="flex flex-col rounded-2xl bg-white p-7 shadow-sm transition-shadow hover:shadow-md sm:p-8"
            >
              {/* Avatar */}
              <div className="h-20 w-20 overflow-hidden rounded-full bg-gray-200">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={56}
                  height={56}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Name + Role */}
              <h3 className="mt-5 text-base font-semibold text-[#000000] sm:text-lg">
                {t.name}
              </h3>
              <span className="mt-0.5 text-sm font-medium text-[#003BE2]">
                {t.role}
              </span>

              {/* Quote */}
              <p className="mt-5 text-sm leading-relaxed text-[#4F4F4F]">
                {t.quote}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
