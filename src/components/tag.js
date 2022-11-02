import * as React from "react";
import { Badge } from "theme-ui";
import { AiFillTags } from "react-icons/ai";

const Tag = (props) => {
  return (
    <div>
      <AiFillTags />
      {props.tags.map((tag) => {
        return <Badge sx={{ variant: "styles.tag" }}>{tag}</Badge>;
      })}
    </div>
  );
};

export default Tag;
