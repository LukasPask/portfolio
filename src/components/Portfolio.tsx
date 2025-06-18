import { Box, Tabs } from '@mantine/core';
import { FaUserAlt } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';

const Portfolio = () => {
  return (
    <Box h={'40%'} w={'60%'}>
      <Tabs
        radius={'40%'}
        variant='outline'
        orientation='vertical'
        defaultValue='profile'
        placement='right'
      >
        <Tabs.List>
          <Tabs.Tab value='profile' leftSection={<FaUserAlt />}></Tabs.Tab>
          <Tabs.Tab value='experience' leftSection={<MdWork />}></Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value='profile'>Profile tab content</Tabs.Panel>

        <Tabs.Panel value='experience'>Experience tab content</Tabs.Panel>
      </Tabs>
    </Box>
  );
};

export default Portfolio;
