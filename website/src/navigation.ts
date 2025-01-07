import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: 'https://scarcekoi.vercel.app/',
    },
    {
      text: 'Projects',
      links: [
        {
          text: 'Projects Home',
          href: getPermalink('/projects'),
        },
        {
          text: 'House Information',
          href: getPermalink('/projects/house-information'),
        },
      ],
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },  
  ],
};

export const footerData = {
  links: [
    {
      title: 'Projects',
      links: [
        { text: 'House Information', href: 'projects/house-information' },
      ],
    },
  ],
  socialLinks: [
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@scarcekoi' },
    { ariaLabel: 'Discord', icon: 'tabler:brand-discord', href: 'https://discordapp.com/users/1167818576992936019' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/scarcekoi' },
    { ariaLabel: 'Steam', icon: 'tabler:brand-steam', href: 'https://steamcommunity.com/id/scarcekoi/' },
    //{ ariaLabel: 'Mastodon', icon: 'tabler:brand-mastodon', href: 'https://mastodon.social/@scarcekoi' },
  ],
};
