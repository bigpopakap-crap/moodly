import { DateTime } from 'luxon';
import { DateTime as StoredDateTime } from '../../../types/storage/DateTime';

export function now(): StoredDateTime {
  return {
    unixTimeSecondsUTC: DateTime.utc().toSeconds()
  };
}
