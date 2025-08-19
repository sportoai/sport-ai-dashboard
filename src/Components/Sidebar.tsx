// src/components/Sidebar.tsx
import { Flex, HStack, Icon, Link, Text } from "@chakra-ui/react"
import {
  FiHome,
  FiBarChart2,
  FiEdit2,
  FiUsers,
  FiKey,
  FiCalendar,
} from "react-icons/fi"
import { MdManageAccounts } from "react-icons/md"
import { useLocation } from "react-router"

const navItems = [
  { label: "Dashboard", icon: FiHome, href: "/" },
  { label: "Analytics", icon: FiBarChart2, href: "/analytics" },
  { label: "Upload", icon: FiEdit2, href: "/upload" },
  { label: "Highlights", icon: FiCalendar, href: "/highlights" },
  { label: "Settings", icon: MdManageAccounts, href: "/settings" },
]

export function Sidebar() {
  const { pathname } = useLocation()

  return (
    <Flex
      as="aside"
      gridArea="sidebar"
      direction="column"
      bg="sidebarBg"
      color="fg"
      h="full"
      px={2}
      mt={4}
      zIndex={100}
    >
      {navItems.map((item) => {
        const isActive =
          pathname === item.href || pathname.startsWith(`${item.href}/`)

        return (
          <Link
            key={item.label}
            href={item.href}
            mb={1}
            _hover={{
              textDecor: "none",
              bg: "primary.50",
              _dark: { bg: "primary.700" },
            }}
            bg={
              isActive
                ? { base: "primary.50", _dark: "primary.700" }
                : "transparent"
            }
            borderRadius="lg"
          >
            <HStack
              px={{ base: 3, md: 6 }}
              py={3}
              spaceX={3}
              borderRadius="md"
              justify={{ base: "center", md: "flex-start" }}
            >
              <Icon as={item.icon} boxSize={5} />
              <Text fontSize="sm">{item.label}</Text>
            </HStack>
          </Link>
        )
      })}
    </Flex>
  )
}
