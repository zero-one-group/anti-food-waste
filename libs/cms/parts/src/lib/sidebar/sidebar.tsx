import {
  Box,
  Circle,
  Flex,
  Stack,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import * as React from 'react';

import { Route, Switch } from 'react-router-dom';
import {
  BiBuoy,
  BiCog,
  BiCommentAdd,
  BiCreditCard,
  BiEnvelope,
  BiHome,
  BiNews,
  BiPurchaseTagAlt,
  BiRecycle,
  BiRedo,
  BiUserCircle,
  BiWallet,
} from 'react-icons/bi';
import {
  AccountSwitcher,
  NavGroup,
  NavItem,
} from '@anti-food-waste/cms/components';

import { Overview } from '@anti-food-waste/cms/pages';

export const Sidebar = () => {
  return (
    <Box height="100vh" overflow="hidden" position="relative">
      <Flex h="full" id="app-container">
        <Box w="64" bg="gray.900" color="white" fontSize="sm">
          <Flex h="full" direction="column" px="4" py="4">
            <AccountSwitcher />
            <Stack spacing="8" flex="1" overflow="auto" pt="8">
              <Stack spacing="1">
                <NavItem
                  href="/overview"
                  active
                  icon={<BiHome />}
                  label="Get Started"
                />
                <NavItem
                  href="/overview"
                  icon={<BiCommentAdd />}
                  label="Inbox"
                />
              </Stack>
              <NavGroup label="Your Business">
                <NavItem
                  href="/overview"
                  icon={<BiCreditCard />}
                  label="Transactions"
                />
                <NavItem
                  href="/overview"
                  icon={<BiUserCircle />}
                  label="Customers"
                />
                <NavItem href="/overview" icon={<BiWallet />} label="Income" />
                <NavItem href="/overview" icon={<BiRedo />} label="Transfer" />
              </NavGroup>

              <NavGroup label="Seller Tools">
                <NavItem
                  href="/overview"
                  icon={<BiNews />}
                  label="Payment Pages"
                />
                <NavItem
                  href="/overview"
                  icon={<BiEnvelope />}
                  label="Invoices"
                />
                <NavItem
                  href="/overview"
                  icon={<BiPurchaseTagAlt />}
                  label="Plans"
                />
                <NavItem
                  href="/overview"
                  icon={<BiRecycle />}
                  label="Subscription"
                />
              </NavGroup>
            </Stack>
            <Box>
              <Stack spacing="1">
                <NavItem
                  href="/overview"
                  subtle
                  icon={<BiCog />}
                  label="Settings"
                />
                <NavItem
                  href="/overview"
                  subtle
                  icon={<BiBuoy />}
                  label="Help & Support"
                  endElement={<Circle size="2" bg="blue.400" />}
                />
              </Stack>
            </Box>
          </Flex>
        </Box>
        <Box bg={mode('white', 'gray.800')} flex="1" p="6">
          <Switch>
            <Route path="/overview" component={Overview}></Route>
          </Switch>
        </Box>
      </Flex>
    </Box>
  );
};

export default Sidebar;
