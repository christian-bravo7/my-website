import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import arraySupport from 'dayjs/plugin/arraySupport';

import 'dayjs/locale/en';
import 'dayjs/locale/es';
import 'dayjs/locale/fr';

// Use Day.js plugin
dayjs.extend(arraySupport);
dayjs.extend(relativeTime);
