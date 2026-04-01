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
            className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors text-white"
            aria-label={social.name}
          >
            <Icon size={iconSize} />
          </a>
        )
      })}
    </div>
  )
}
