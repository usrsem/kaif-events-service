'use strict';

const settings = require('../config.js');

function EventsPushService(eventsRepository, telegramService) {
  this.repository = eventsRepository;
  this.service = telegramService;
}

EventsPushService.prototype.start = async function () {
  const mustBePushed = (date) => date > new Date();

  const updateEvent = async (event) => {
    event.pushed = true;
    await this.repository.update(event);
  };

  const serve = async () => {
    const events = await this.repository.getAll();

    for (const event of events) {
      if (mustBePushed(event.startDate)) {
        await this.service.sendEvent(event);
        await updateEvent(event);
      }
    }
  };

  setInterval(serve, settings.pushServiceDelay);
};

module.exports = { EventsPushService };
