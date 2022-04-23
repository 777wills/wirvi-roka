interface Props {
  width?: string;
  height?: string;
  color?: string;
}

export const Icon = ({
  width = '20',
  height = '20',
  color = '#fff',
}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="arrow-circle-down"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
    >
      <path d="M0,12A12,12,0,1,0,12,0,12.013,12.013,0,0,0,0,12Zm22,0A10,10,0,1,1,12,2,10.011,10.011,0,0,1,22,12Z" />
      <path d="M16,12a2.993,2.993,0,0,1-.752,1.987c-.291.327-.574.637-.777.84L11.647,17.7a1,1,0,1,1-1.426-1.4L13.05,13.42c.187-.188.441-.468.7-.759a1,1,0,0,0,0-1.323c-.258-.29-.512-.57-.693-.752L10.221,7.7a1,1,0,1,1,1.426-1.4l2.829,2.879c.2.2.48.507.769.833A2.99,2.99,0,0,1,16,12Z" />
    </svg>
  );
};
