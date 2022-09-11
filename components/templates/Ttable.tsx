import Table from 'react-bootstrap/Table';

interface Props {
    striped?: boolean,
    bordered?: boolean,
    hover?: boolean,
    size?: "sm" | "lg" | undefined
}

const Ttable = ({striped, bordered, hover, size}: Props) => {
  return (
    <Table
    striped={striped}
    bordered={bordered}
    hover={hover}
    size={size}

    >

    </Table>
  )
}

export default Ttable