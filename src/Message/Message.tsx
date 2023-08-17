import React, { useState, useCallback, useContext } from 'react';
import PropTypes from 'prop-types';
import { useClassNames, useTimeout, MESSAGE_STATUS_ICONS, STATUS, useIsMounted } from '../utils';
import { WithAsProps, TypeAttributes, RsRefForwardingComponent } from '../@types/common';
import CloseButton from '../CloseButton';
import ToastContext from '../toaster/ToastContext';

export interface MessageProps extends WithAsProps {
  /** The type of the message box. */
  type?: TypeAttributes.Status;

  /** Whether it is possible to close the message box */
  closable?: boolean;

  /**
   * Delay automatic removal of messages.
   * When set to 0, the message is not automatically removed.
   * (Unit: milliseconds)
   *
   * @default 2000
   * @deprecated Use `toaster.push(<Message />, { duration: 2000 })` instead.
   *
   */
  duration?: number;

  /** The title of the message  */
  header?: React.ReactNode;

  /** Whether to display an icon */
  showIcon?: boolean;

  /** Fill the container */
  full?: boolean;

  border?: boolean;

  /** Subtitle */
  subTitle?: React.ReactNode;

  /** Callback after the message is removed */
  onClose?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}

type DisplayType = 'show' | 'hide' | 'hiding';

const Message: RsRefForwardingComponent<'div', MessageProps> = React.forwardRef(
  (props: MessageProps, ref) => {
    const {
      as: Component = 'div',
      className,
      classPrefix = 'message',
      children,
      border,
      closable,
      duration = 2000,
      full,
      subTitle,
      header,
      type = 'info',
      showIcon,
      onClose,
      ...rest
    } = props;

    const [display, setDisplay] = useState<DisplayType>('show');
    const { withClassPrefix, merge, prefix } = useClassNames(classPrefix);
    const isMounted = useIsMounted();
    const { usedToaster } = useContext(ToastContext);

    // Timed close message
    const { clear } = useTimeout(onClose, duration, usedToaster && duration > 0);

    const handleClose = useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        setDisplay('hiding');
        onClose?.(event);
        clear();

        setTimeout(() => {
          if (isMounted()) {
            setDisplay('hide');
          }
        }, 1000);
      },
      [clear, isMounted, onClose]
    );

    if (display === 'hide') {
      return null;
    }

    const classes = merge(
      className,
      withClassPrefix(type, display, { full, ['has-title']: header, ['has-icon']: showIcon , ['has-subtitle']: subTitle, ['has-border']: border})
    );

    return (
      <Component role="alert" {...rest} ref={ref} className={classes}>
        <div className={prefix`container`}>
          {closable && <CloseButton onClick={handleClose} />}
          {showIcon && <div className={prefix`icon-wrapper`}>{MESSAGE_STATUS_ICONS[type]}</div>}
          <div className={prefix`content`}>
            {subTitle && <div className={prefix`subtitle`}>{subTitle}</div>}
            {header && <div className={prefix`header`}>{header}</div>}
            {children && <div className={prefix`body`}>{children}</div>}
          </div>
        </div>
      </Component>
    );
  }
);

Message.displayName = 'Message';
Message.propTypes = {
  type: PropTypes.oneOf(STATUS),
  className: PropTypes.string,
  onClose: PropTypes.func,
  closable: PropTypes.bool,
  title: PropTypes.node,
  subTitle: PropTypes.node,
  description: PropTypes.node,
  showIcon: PropTypes.bool,
  full: PropTypes.bool,
  border: PropTypes.bool,
  classPrefix: PropTypes.string
};

export default Message;
