import { GuestModel } from '../models/guest.model';

export const generateGuestListFunction = (guests: Array<GuestModel>): string => {
  return `
    <div>
      ${
    containsAccept(guests) ?
      `
            <br>
            <em>Invitado(s) confirmado(s):</em>
            <br><br>
            <ul>
              ${
        guests
          .filter(guest => guest.status === 2)
          .map(guest => `<li>${guest.name} ${guest.surname ? guest.surname : ''} ${guest.motherSurname ? guest.motherSurname : ''}</li>`)
          .join('')
      }
            </ul>
          `
      :
      ''
  }
      ${containsDeny(guests) ?
      `
            <br>
            <em>Invitado(s) que no asistirán:</em>
            <br><br>
            <ul>
              ${
        guests
          .filter(guest => guest.status === 0)
          .map(guest => `<li>${guest.name} ${guest.surname ? guest.surname : ''} ${guest.motherSurname ? guest.motherSurname : ''}</li>`)
          .join('')
      }
            </ul>
          `
      :
      ''
  }
    </span>
  `;
}

export const generateGuestListFunctionEn = (guests: Array<GuestModel>): string => {
  return `
    <div>
      ${
    containsAccept(guests) ?
      `
            <br>
            <em>Confirmed Guest(s):</em>
            <br><br>
            <ul>
              ${
        guests
          .filter(guest => guest.status === 2)
          .map(guest => `<li>${guest.name} ${guest.surname ? guest.surname : ''} ${guest.motherSurname ? guest.motherSurname : ''}</li>`)
          .join('')
      }
            </ul>
          `
      :
      ''
  }
      ${containsDeny(guests) ?
    `
            <br>
            <em>Guest(s) not attending:</em>
            <br><br>
            <ul>
              ${
      guests
        .filter(guest => guest.status === 0)
        .map(guest => `<li>${guest.name} ${guest.surname ? guest.surname : ''} ${guest.motherSurname ? guest.motherSurname : ''}</li>`)
        .join('')
    }
            </ul>
          `
    :
    ''
  }
    </span>
  `;
}

const containsAccept = (guests: Array<GuestModel>): boolean => {
  let out = false;

  guests.forEach(guest => {
    if (guest.status === 2) {
      out = true;
    }
  });

  return out;
}

const containsDeny = (guests: Array<GuestModel>): boolean => {
  let out = false;

  guests.forEach(guest => {
    if (guest.status === 0) {
      out = true;
    }
  });

  return out;
}
