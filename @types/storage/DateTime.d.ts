export interface DateTime {
  /**
   * A timestamp is stored using Unix Time (number of seconds since the epoch)
   * and is always stored in the UTC timezone.
   */
  unix_time_seconds_utc: number;
}
