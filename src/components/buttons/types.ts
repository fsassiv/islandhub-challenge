export type BaseBottomPropTypes = {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  text?: string;
};

export type IconButtonPropTypes = BaseBottomPropTypes & {
  icon: 'heart' | 'bag';
};

export type SocialLinkButtonPropTypes = BaseBottomPropTypes & {
  icon: 'twitter' | 'tiktok' | 'instagram' | 'linkedin';
};
