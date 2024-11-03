import { h } from "preact";
import { Link } from "preact-router/match";
import { Breadcrumbs, Typography } from "@mui/material";

const Breadcrumb = ({ crumbs }) => {
  return (
    <Breadcrumbs aria-label="Breadcrumbs" sx={{ padding: 2 }}>
      {(crumbs || []).map((segment) => {
        return (
          <Link
            key={segment.url}
            href={segment.active ? undefined : segment.url}
          >
            <Typography
              color={segment.active ? "text.secondary" : "primary"}
              textTransform="capitalize"
            >
              {segment.title}
            </Typography>
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
