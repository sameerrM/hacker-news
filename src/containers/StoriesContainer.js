import React, { useEffect, useState } from "react";
import { getStoryIds } from "../services/hnApi";
import { Story } from "../components/Story";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

import {GlobalStyle, StoriesContainerWrapper} from "../styles/StoriesContainerStyles";

export const StoriesContainer = () => {
  const {count} = useInfiniteScroll();
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data));
  }, []);

  return (
    <>
      <GlobalStyle/>
      <StoriesContainerWrapper data-test-id="stories-container">
        <h1>Hacker News Stories</h1>
        {storyIds.slice(0, count).map(item => (
            <Story storyId={item} key={item} />
        ))}
      </StoriesContainerWrapper>
    </>
  );
};
