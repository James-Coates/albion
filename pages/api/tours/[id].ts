import { tours } from '../../../mock/tours';

export default function personHandler({ query: { id } }, res) {
  const filtered = tours.filter((t) => t.id === id);

  // Tour with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res
      .status(404)
      .json({ message: `Tour with id: ${id} not found.` });
  }
}
