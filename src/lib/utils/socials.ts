
import { Twitter, Linkedin, Github, Instagram } from "lucide-svelte"

export let socials: { icon: any; name: string; href: string }[] = [
    { icon: Twitter, name: "Twitter", href: "https://twitter.com/cradlydev" },
    { icon: Linkedin, name: "Instagram", href: "https://www.instagram.com/josh__hh/" },
    { icon: Github, name: "Github", href: "https://github.com/blazzjosh" },
    { icon: Instagram, name: "Linkedin", href: "https://www.linkedin.com/in/cradlyjosh/" },
  ];