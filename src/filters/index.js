export {
    parseTime
}
from '@/utils'
import categoryMap from '@/utils/index';

const filterCategory = (id) => {
    return categoryMap[id];
}