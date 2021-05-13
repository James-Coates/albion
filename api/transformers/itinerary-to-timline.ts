import { ItineraryItem } from '@type/ItineraryItem';
import { TimelineItemType } from '@components/molecules';

export function itineraryToTimeline(
  itineraryItems: ItineraryItem[],
): TimelineItemType[] {
  return itineraryItems.map((itineraryItem) => ({
    label: itineraryItem.locationName,
    heading: itineraryItem.title,
    overline: itineraryItem.startTime,
    content: itineraryItem.summary,
    image: itineraryItem.image,
  }));
}
