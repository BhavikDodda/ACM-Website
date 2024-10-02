import React, { useState } from 'react'
import allteams from '@/data/allteams/allteams'
import TeamMemberCard from '@/components/TeamCard'
import { Reveal } from '@/components/Reveal'

const Team = () => {
  const initialTeamMembers = allteams.filter((member) => member.year === 2024)

  const [teamMembers, setTeamMembers] = useState(initialTeamMembers)
  const [selectedYear, setSelectedYear] = useState(2024)

  const filterByYear = (year) => {
    if (year === selectedYear) {
      // If the same year is clicked again, remove the filter
      setSelectedYear(2024)
      setTeamMembers(initialTeamMembers)
    } else {
      // Filter the data by the selected year
      const filteredMembers = allteams.filter((member) => member.year === year)
      setSelectedYear(year)
      setTeamMembers(filteredMembers)
    }
  }

  const availYears = [
    2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
  ]

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl py-8 px-4 text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          {/* Filter bar with buttons for each available year */}
          <Reveal>
            <div>
              <ul className="flex flex-wrap text-center text-xl font-medium text-gray-500 dark:text-gray-400">
                {availYears.map((year) => (
                  <li className="me-2" key={year}>
                    <button
                      className="inline-block rounded-lg px-4 py-3 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
                      onClick={() => filterByYear(year)}
                    >
                      {year}
                    </button>
                  </li>
                ))}
              </ul>
              {/* Add buttons for other available years */}
            </div>
          </Reveal>
          <h1 className="mt-8 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Team of {selectedYear}
          </h1>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-16">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} teamMember={member} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
