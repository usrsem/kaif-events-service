'use strict';

const V1EventBusinessService = (eventRepository) => ({
  add: async (event) => {
    await eventRepository.save(event);
    return { value: event };
  },
  update: async (event) => {
    await eventRepository.save(event);
    return { value: event };
  },
  getAll: async () => ({ value: await eventRepository.getAll() })
});

module.exports = { V1EventBusinessService };
