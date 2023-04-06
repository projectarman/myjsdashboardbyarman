import { Flex, useColorModeValue } from '@chakra-ui/react';


export default function SidebarDocs() {
	const borderColor = useColorModeValue('white', 'navy.800');

	return (
		<Flex
			justify='center'
			direction='column'
			align='center'
			
			borderRadius='30px'
			me={{ base: '20px' }}
			position='relative'>
			<Flex
				border='5px solid'
				borderColor={borderColor}
				
				borderRadius='50%'
				w='94px'
				h='94px'
				align='center'
				justify='center'
				mx='auto'
				position='absolute'
				left='50%'
				top='-47px'
				transform='translate(-50%, 0%)'>
				
			</Flex>
			
			
		</Flex>
	);
}
