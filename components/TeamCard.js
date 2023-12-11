import React from 'react'
import SocialIcon from '@/components/social-icons'

const TeamMemberCard = (member) => {
  const { id, name, designation, imgavail, fblink, twitterid, mailid, linkedin, github } =
    member.teamMember
  const socialMedia = [
    {
      link: fblink,
      kind: 'facebook',
    },
    {
      link: twitterid,
      kind: 'twitter',
    },
    {
      link: mailid,
      kind: 'mail',
    },
    {
      link: linkedin,
      kind: 'linkedin',
    },
    {
      link: github,
      kind: 'github',
    },
    // Add more social media links as needed
  ]
  return (
    <div className="text-center text-gray-500 dark:text-gray-400">
      {imgavail === 1 ? (
        <img
          className="mx-auto mb-4 h-36 w-36 rounded-full"
          src={`/static/allteams/${id}.jpg`}
          alt={`${name} Avatar`}
        />
      ) : (
        <img
          className="mx-auto mb-4 h-36 w-36 rounded-full"
          src={`/static/allteams/unknown.jpg`}
          alt={`${name} Avatar`}
        />
      )}
      <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <a href={fblink}>{name}</a>
      </h3>
      <p>{designation}</p>
      <ul className="mt-4 flex justify-center space-x-1">
        {socialMedia.map((social, index) => (
          <li key={index}>
            {social.link && (
              <SocialIcon
                size="6"
                kind={social.kind}
                href={social.link}
                className=" hover:text-gray-900 dark:hover:text-white"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TeamMemberCard
