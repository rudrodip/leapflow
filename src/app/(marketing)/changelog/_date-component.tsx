type DateComponentProps = {
  date: Date;
}

export default function DateComponent({ date }: DateComponentProps) {
  return <p className="py-1 px-2 text-sm bg-black inline-flex rounded-2xl">{date.toDateString()}</p>
}