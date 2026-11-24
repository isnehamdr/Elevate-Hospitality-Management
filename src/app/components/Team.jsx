import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: "Mr. Suresh Shrestha",
      role: "Consultant",
      image: "/images/user.png",
    },
    {
      name: "Mr. Sharan Ghale",
      role: "Managing Director (MD)",
      image: "/images/user.png",
    },
    {
      name: "Mr. Dipak Pokhrel",
      role: "Chief Executive Officer (CEO)",
      image: "/images/user.png",
    },
    {
      name: "Mr. Sailendra Thapa Magar",
      role: "Director of Training & Development",
      image: "/images/user.png",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Meet Our Team
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Dedicated professionals committed to elevating hospitality standards and delivering excellence.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Member Image */}
              <div className="h-64 bg-gray-100 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Member Info */}
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {member.name}
                </h3>

                <p className="text-sm text-[#0f2547] font-medium uppercase tracking-wide">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;