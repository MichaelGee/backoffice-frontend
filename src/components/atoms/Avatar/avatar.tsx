import React, { memo, useState, useEffect } from "react";
import { getInitials } from "utils/helpers";
import withDefaults from "utils/with-defaults";
import {
  StyledAvatarContainer,
  AvatarContainerVariantProps,
  AvatarInitials,
  AvatarInitialsVariantProps,
  AvatarImage,
} from "./avatar.styles";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface Props {
  id?: string;
  src?: string;
  size?: "sm" | "md" | "lg";
  name?: string;
  loading?: boolean;
}

const defaultProps = {
  size: "sm",
  name: "John Doe",
  loading: false,
};

type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props>;

export type AvatarProps = Props &
  Partial<typeof defaultProps> &
  NativeAttrs &
  AvatarContainerVariantProps &
  AvatarInitialsVariantProps;

const Avatar: React.FC<AvatarProps> = memo(({ id, src, name, size, loading }) => {
  const [imageHasFailedLoading, setImageHasFailedLoading] = useState(false);
  const userInitials = getInitials(name);

  useEffect(() => {
    if (!src) {
      setImageHasFailedLoading(true);
    }
  }, [src]);

  return (
    <StyledAvatarContainer size={size}>
      {loading ? (
        <Skeleton height={size} width={size} />
      ) : (
        <>
          {imageHasFailedLoading && <AvatarInitials size={size}>{userInitials}</AvatarInitials>}
          {!imageHasFailedLoading && <AvatarImage id={id} src={src} alt={`${userInitials}_avatar`} />}
        </>
      )}
    </StyledAvatarContainer>
  );
});

export default withDefaults(Avatar, defaultProps);
