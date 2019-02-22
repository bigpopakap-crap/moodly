import { DateTime } from 'luxon';
import { DateTime as StoredDateTime } from '@moodly/types/storage/DateTime';

export function now(): StoredDateTime {
  return {
    unixTimeSecondsUTC: DateTime.utc().toSeconds()
  };
}
