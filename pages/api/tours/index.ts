import { tours } from '../../../mock/tours';

export default function handler(req, res) {
  setTimeout(() => res.status(200).json(tours), 0);
}
