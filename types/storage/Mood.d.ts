import { Color } from '../client/Color';
import { IconKey } from '../client/Icon';
import { TranslationKey } from '../client/Translation';
import { DateTime } from './DateTime';
import { Id } from './Id';

/**
 * An individual user-entered mood entry. This is the more prominent "unit" of data that
 * the user enters. The whole app is driven by these, entered by the user.
 */
export interface MoodEntry {
  id: Id;

  /**
   * The timestamp this event corresponds to. This is not necessarily when it was posted, but
   * rather when the user felt the mood described in this entry.
   *
   * @user-updatable true
   */
  dateTime: DateTime;

  /**
   * The freeform text entered by the user.
   *
   * @user-updatable false
   */
  content: string;

  /**
   * The sentiment the user was feeling at the time of the entry.
   *
   * @user-updatable true
   */
  sentiment: MoodSentiment;

  /**
   * The {@link MoodEvent} to which this entry is tied. All {@link MoodEntry}s tied to the same
   * {@link MoodEvent} are assumed to be related to the same real-world incident.
   *
   * @user-updatable true
   */
  event: MoodEvent;
}

/**
 * A grouping of individual {@link MoodEntry}s that are related to the same real-world occurrence.
 *
 * For example, an incident might happen that prompts one entry and then a bunch of follow-ups. The
 * follow-ups will be updates to the same incident with new reflections and feelings about the original
 * inciting incident.
 */
export interface MoodEvent {
  id: Id;

  /**
   * The schema under which this {@link MoodEvent} falls.
   *
   * @user-updatable true
   */
  schema: MoodSchema;

  /**
   * The tags associated with this mood event and all the associated {@link MoodEntry}s
   *
   * @user-updatable true
   */
  tags: MoodTag[];
}

/**
 * The word "schema" comes from the domain of social psychology. It's meant to denote the
 * different aspects of life in which we operate (ex. "love", "work", "family", etc.)
 *
 * These are different facets of a person's life. Each {@link MoodEvent} will be tagged with
 * a {@link MoodSchema} so users can keep a pulse on how different aspects of their life are going.
 *
 * In effect, this defines the widest (least granular) categorization of {@link MoodEvent}s
 */
export interface MoodSchema {
  id: Id;

  /**
   * The translation key to use to label this schema in the UI.
   * This will not be defined if it is a user-defined schema.
   * This *must* be defined for a built-in schema.
   *
   * @user-updatable false
   */
  translationKey?: TranslationKey;

  /**
   * A user-defined UI label for this schema that overrides {@link translationKey}.
   * This will not be defined if it is a built-in schema.
   * This *must* be defined for a  user-defined schema.
   *
   * @user-updatable true
   */
  customLabel?: string;

  /**
   * The icon used to represent this schema.
   *
   * @user-updatable true - if it is a user-defined schema.
   */
  iconKey: IconKey;

  /**
   * The color used to render this schema in the UI.
   *
   * @user-updatable true - if it is a user-defined schema.
   */
  primaryColor: Color;
}

/**
 * A number indicating how strongly an emotion is felt. An emotion can range from very negative,
 * to neutral, to very positive.
 */
export enum MoodSentiment {
  FIRE_NEGATIVE = -3,
  HOT_NEGATIVE = -2,
  MILD_NEGATIVE = -1,
  NEUTRAL = 0,
  MILD_POSITIVE = 1,
  HOT_POSITIVE = 2,
  FIRE_POSITIVE = 3
}

/**
 * A custom tag that can be applied to {@link MoodEvent}s to help filter and analyze
 * {@link MoodEvent}s and their associated {@link MoodEntry}s
 */
export interface MoodTag {
  id: Id;

  /**
   * The user-entered display name.
   *
   * @user-updatable true
   */
  label: string;

  /**
   * The color used to display this tag in the UI.
   *
   * @user-updatable true
   */
  color: Color;
}
