import { h } from "preact";
import { Box, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import clsx from "clsx";
import { useEffect, useRef, useState } from "preact/hooks";
import styles from "./style.css";

const SearchField = ({
  id,
  label,
  defaultValue,
  disabled,
  value,
  onBlur,
  onFocus,
  ...props
}) => {
  const ref = useRef(null);

  const [isFilled, setFilled] = useState(false);
  const [isFocused, setFocus] = useState(false);

  const handleFocus = (event) => {
    setFocus(true);

    if (onFocus) onFocus(event);
  };

  const handleBlur = (event) => {
    const { value } = event.currentTarget;
    setFilled(value.length > 0);
    setFocus(false);

    if (onBlur) onBlur(event);
  };

  useEffect(() => {
    setFilled(value || defaultValue);
  }, [defaultValue, value]);

  return (
    <Box
      display="flex"
      alignItems="center"
      className={clsx(styles.root, { [styles.disabled]: disabled })}
    >
      <SearchIcon titleAccess="Search Icon" className={styles.icon} />
      <Box display="flex" flexDirection="column" justify="center">
        {label && (
          <Typography
            className={clsx(
              styles["input-label"],
              {
                [styles["input-label-active"]]: isFilled || isFocused,
              },
              { [styles["input-label-disabled"]]: disabled },
            )}
            htmlFor={id}
            component="label"
          >
            {label}
          </Typography>
        )}
        <input
          ref={ref}
          autoComplete="off"
          className={clsx(styles.input)}
          disabled={disabled}
          defaultValue={defaultValue}
          id={id}
          type="text"
          onBlur={handleBlur}
          onFocus={handleFocus}
          value={value}
          {...props}
        />
      </Box>
    </Box>
  );
};

export default SearchField;
