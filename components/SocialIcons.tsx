import { socialLinks } from "@/lib/social-links"

interface SocialIconsProps {
  className?: string
  iconSize?: number
}

export function SocialIcons({
  className = "",
  iconSize = 20,
}: SocialIconsProps) {
  return (
    <div className={`flex gap-4 ${className}`}>
      {socialLinks.map((social) => {
        const Icon = social.icon

        return (
          <a
            key={social.name}
            href={social.href}
            title={social.name}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition duration-300"
            aria-label={social.name}
          >
            <Icon size={iconSize} />
          </a>
        )
      })}
    </div>
  )
}
