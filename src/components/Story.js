import React, { useState, useEffect } from "react";
import { getStory } from "../services/hnApi";
import { StoryWrapper, StoryTitle, StoryMeta, StoryMetaElement } from "../styles/StoryStyles";

export const Story = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then(data => data && data.url && setStory(data));
  }, [storyId]);

  return story && story.url ? (
    <StoryWrapper>
        <StoryTitle data-testid="story">
            <a href={story.url} target="_blank" rel="noopener noreferrer">{story.title}</a>
        </StoryTitle>
        <StoryMeta>
            <span className="story__by" data-testid="story-by">
                <StoryMetaElement color="#000">By</StoryMetaElement> {story.by}
            </span>
            <span className="story__time" data-testid="story-time">
                <StoryMetaElement color="#000">Posted:</StoryMetaElement> {story.time}
            </span>
        </StoryMeta>
    </StoryWrapper>
  ) : null;
};
