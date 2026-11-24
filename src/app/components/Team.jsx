import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: "Mr. Suresh Shrestha",
      role: "Consultant",
      image: "https://placehold.net/avatar.svg",
    },
    {
      name: "Mr. Sharan Ghale",
      role: "Managing Director (MD)",
      image: "https://placehold.net/avatar.svg",
    },
    {
      name: "Mr. Dipak Pokhrel",
      role: "Chief Executive Officer (CEO)",
      image: "https://placehold.net/avatar.svg",
    },
    {
      name: "Mr. Sailendra Thapa Magar",
      role: "Director of Training & Development",
      image: "https://placehold.net/avatar.svg",
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
              className="bg-[#0f2547] rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Member Image */}
              <div className="h-72 w-overflow-hidden p-4 ">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-contain  "
                  loading="lazy"
                />
              </div>

              {/* Member Info */}
              <div className="p-3 text-center bg-[#0f2547]">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {member.name}
                </h3>

                <p className="text-sm text-white font-medium uppercase tracking-wide">
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