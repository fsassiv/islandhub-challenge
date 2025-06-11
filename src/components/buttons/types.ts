export type BaseBottomPropTypes = {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  text?: string;
};

export type IconButtonPropTypes = BaseBottomPropTypes & {
  icon: 'favorites' | 'cart';
  additionalClasses?: string;
  cartCount?: number;
};

export type SocialLinkButtonPropTypes = BaseBottomPropTypes & {
  icon: 'twitter' | 'tiktok' | 'instagram' | 'linkedin';
};

export type CtaLinkButtonPropTypes = BaseBottomPropTypes & {
  href: string;
};
