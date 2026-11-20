
const socialLinks = [
  {
    platform: 'github',
    name: 'GitHub',
    url: 'https://github.com/rufinofelipe910',
    icon: 'GH'
  },
  {
    platform: 'whatsapp',
    name: 'WhatsApp',
    url: 'https://whatsapp.com/channel/0029Vb9ew7KKmCPPIZ6RtL3U',
    icon: 'WA'
  },
  {
    platform: 'instagram',
    name: 'Instagram',
    url: 'https://www.instagram.com/rey__rufino?lqvp=MTI2aWlxaGVsNzB1bQ==',
    icon: 'IG'
  },
  {
    platform: 'telegram',
    name: 'Telegram',
    url: 'https://t.me/ReyRufinodev',
    icon: 'TG'
  },
  {
    platform: 'x',
    name: 'X',
    url: 'https://x.com/ReyRufinoXVI',
    icon: 'X'
  }
]

function SocialLinks({ className = '' }) {
  return (
    <div className={`social-links ${className}`.trim()}>
      {socialLinks.map((social) => (
        <a
          key={social.platform}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          title={social.name}
        >
          <span aria-hidden="true">{social.icon}</span>
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
