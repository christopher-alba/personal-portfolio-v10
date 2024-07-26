import { FC, useRef, useState, useEffect } from "react";
import { work } from "./data";
import {
  CareerWrapper,
  Date,
  HistoryCard,
  HistoryList,
  Pill,
  Timeline,
  TimelineCard,
  TimelineCardOuter,
  TimelineCardsWrapper,
  TimelineWrapper,
} from "./styled";
import { Container } from "../../components/container";
import Draggable from "react-draggable";

const Career: FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardsWrapperRef = useRef<HTMLDivElement | null>(null);
  const [bounds, setBounds] = useState<
    { left: number; right: number } | undefined
  >(undefined);

  useEffect(() => {
    if (containerRef.current && cardsWrapperRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const cardsWrapperRect = cardsWrapperRef.current.getBoundingClientRect();

      console.log("Container Rect:", containerRect);
      console.log("Cards Wrapper Rect:", cardsWrapperRect);

      setBounds({
        left: -(cardsWrapperRect.width - containerRect.width),
        right: 0,
      });

      console.log("Bounds:", {
        left: -(cardsWrapperRect.width - containerRect.width),
        right: 0,
      });
    }
  }, [containerRef, cardsWrapperRef]);

  return (
    <CareerWrapper>
      <TimelineWrapper>
        <Timeline />
        <Container id="bounds" ref={containerRef}>
          <Draggable axis="x" bounds={bounds}>
            <TimelineCardsWrapper ref={cardsWrapperRef}>
              {work.map((company, index) => (
                <TimelineCardOuter>
                  <Date>{company.dateString}</Date>
                  <TimelineCard key={index}>
                    <h2>{company.position}</h2>
                    <h3>{company.name}</h3>
                    <p>{company.summary}</p>
                    <div>
                      {company.technologies.map((tech, index) => (
                        <Pill key={index}> {tech} </Pill>
                      ))}
                    </div>
                  </TimelineCard>
                </TimelineCardOuter>
              ))}
            </TimelineCardsWrapper>
          </Draggable>
        </Container>
      </TimelineWrapper>
      <HistoryList>
        <Container>
          {work.map((company, index) => (
            <HistoryCard>
              <Date>{company.dateString}</Date>
              <TimelineCard key={index}>
                <h2>{company.position}</h2>
                <h3>{company.name}</h3>
                <p>{company.summary}</p>
                <div>
                  {company.technologies.map((tech, index) => (
                    <Pill key={index}> {tech} </Pill>
                  ))}
                </div>
              </TimelineCard>
            </HistoryCard>
          ))}
        </Container>
      </HistoryList>
    </CareerWrapper>
  );
};

export default Career;
