const Analytics = () => {
  return (
    <div>
      <Text fontSize={"3xl"} fontWeight={"bolder"}>
        Dashboard
      </Text>
      <Text mb={10} color={"gray.500"}>
        Overview of your Team performance
      </Text>
      <MainContent />
    </div>
  )
}

export default Analytics
import { MdOndemandVideo } from "react-icons/md"

import { FcSalesPerformance } from "react-icons/fc"
import { FaBrain } from "react-icons/fa"

import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react"
import { Chart, useChart } from "@chakra-ui/charts"
import {
  LineChart,
  BarChart,
  Line,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts"
import { useEffect, useState } from "react"
import { CircularLoading } from "@/lib/loading"
import { TbPlayerPlayFilled } from "react-icons/tb"

// import FfmpegTest from "@/features/post/lib/Files"

const SalesLineChart = () => {
  const chart = useChart({
    data: [
      { video_analyzed: 10, month: "January" },
      { video_analyzed: 95, month: "February" },
      { video_analyzed: 87, month: "March" },
      { video_analyzed: 88, month: "May" },
      { video_analyzed: 65, month: "June" },
      { video_analyzed: 90, month: "August" },
    ],
    series: [{ name: "video_analyzed", color: "teal.solid" }],
  })

  return (
    <Chart.Root maxH="sm" chart={chart}>
      <LineChart data={chart.data}>
        <CartesianGrid stroke={chart.color("border")} vertical={false} />
        <XAxis
          axisLine={false}
          dataKey={chart.key("month")}
          tickFormatter={(value) => value.slice(0, 3)}
          stroke={chart.color("border")}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tickMargin={10}
          stroke={chart.color("border")}
        />
        <Tooltip
          animationDuration={100}
          cursor={false}
          content={<Chart.Tooltip />}
        />
        {chart.series.map((item) => (
          <Line
            key={item.name}
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            stroke={chart.color(item.color)}
            strokeWidth={2}
            dot={false}
          />
        ))}
      </LineChart>
    </Chart.Root>
  )
}

const AllocationBarChart = () => {
  const chart = useChart({
    data: [
      { allocation: 60, type: "Nepal  Higlights" },
      { allocation: 45, type: " Futsal Highlights " },
      { allocation: 12, type: "Soccer" },
      { allocation: 4, type: "wordcup" },
    ],
    series: [{ name: "allocation", color: "teal.solid" }],
  })

  return (
    <Chart.Root maxH="sm" chart={chart}>
      <BarChart data={chart.data}>
        <CartesianGrid stroke={chart.color("border.muted")} vertical={false} />
        <XAxis axisLine={false} tickLine={false} dataKey={chart.key("type")} />
        <YAxis
          axisLine={false}
          tickLine={false}
          domain={[0, 100]}
          tickFormatter={(value) => `${value}%`}
        />
        {chart.series.map((item) => (
          <Bar
            key={item.name}
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
          />
        ))}
      </BarChart>
    </Chart.Root>
  )
}

const metricCards = [
  {
    label: "Total Videos Analyzed",
    value: "12",
    change: "+12%",
    icons: <TbPlayerPlayFilled />,
  },
  {
    label: "Team Performance",
    value: "28",
    change: "+8%",
    icons: <FcSalesPerformance />,
  },
  {
    label: "Match Highlights",
    value: "8",
    change: "+8%",
    icons: <MdOndemandVideo />,
  },
  {
    label: "Active AI Models",
    value: "5,432",
    change: "+5%",
    icons: <FaBrain />,
  },
]
export function MainContent() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800)
    return () => clearTimeout(t)
  }, [])
  if (loading) return <CircularLoading />
  return (
    <Box>
      <Grid
        w="full"
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap={4}
        mb={10}
      >
        {metricCards.map((stat) => (
          <Box
            key={stat.label}
            p={6}
            borderRadius="lg"
            backgroundColor={"bg.muted"}
            position="relative"
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
            }}
            transition="all 0.2s ease-in-out"
          >
            <VStack align="start" gap={3}>
              {/* Header with label and icon */}
              <HStack justify="space-between" w="full">
                <Text
                  fontSize="sm"
                  color="fg.MUTED"
                  fontWeight="medium"
                  textTransform="uppercase"
                  letterSpacing="wider"
                >
                  {stat.label}
                </Text>
                <Box color="gray.500">{stat.icons}</Box>
              </HStack>

              {/* Main value */}
              <Text
                fontSize="3xl"
                lineHeight="1"
                fontWeight="bold"
                color="fg.DEFAULT"
              >
                {stat.value}
              </Text>

              {/* Change indicator */}
              <HStack gap={1}>
                <Text
                  fontSize="sm"
                  color="green"
                  fontWeight="semibold"
                  display="flex"
                  alignItems="center"
                >
                  {stat.change}
                </Text>
              </HStack>
            </VStack>

            {/* Subtle gradient overlay */}
            <Box
              position="absolute"
              top="0"
              right="0"
              bottom="0"
              left="0"
              bgGradient="linear(to-br, transparent 0%, gray.900 100%)"
              opacity={0.3}
              borderRadius="xl"
              pointerEvents="none"
            />
          </Box>
        ))}
      </Grid>
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6} mb={6}>
        <GridItem>
          <Box
            backgroundColor={"bg"}
            _dark={{ bg: "bg.muted" }}
            borderRadius="lg"
            p={4}
            shadow="md"
          >
            <Text fontWeight="medium" mb={2}>
              Video Analyzed
            </Text>
            <SalesLineChart />
          </Box>
        </GridItem>

        <GridItem>
          <Box
            backgroundColor={"bg"}
            _dark={{ bg: "bg.muted" }}
            borderRadius="lg"
            p={4}
            shadow="md"
          >
            <Text fontWeight="medium" mb={2}>
              AI Model Allocation
            </Text>
            <AllocationBarChart />
          </Box>
        </GridItem>
      </Grid>

      <Flex direction={{ base: "column", md: "row" }} gap={6}>
        <Box
          flex="1"
          backgroundColor={"bg"}
          _dark={{ bg: "bg.muted" }}
          p={4}
          borderRadius="lg"
          shadow="md"
        >
          <Text fontWeight="medium" mb={2}>
            Recent Activity
          </Text>
          {/* Add list/table here */}
        </Box>

        <Box
          flex="1"
          backgroundColor={"bg"}
          _dark={{ bg: "bg.muted" }}
          p={4}
          borderRadius="lg"
          shadow="md"
        >
          <Text fontWeight="medium" mb={2}>
            Overview
          </Text>
          {/* Extra widgets */}
        </Box>
      </Flex>
    </Box>
  )
}
