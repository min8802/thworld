// components/StyledButton.tsx
import { Button, ButtonProps } from '@chakra-ui/react';
import { FC } from 'react';

interface StyledButtonProps extends ButtonProps {
  // 필요에 따라 커스텀 속성을 추가할 수 있습니다.
}

const StyledButton: FC<StyledButtonProps> = ({ children, ...props }) => {
  return (
    <Button
        fontSize="20px"
        variant="unstyled"
        color="white" // 기본 텍스트 색상
        // _hover={{ bg: 'blue.600' }} // 호버 시 배경색
        {...props} // 추가적으로 전달되는 props 적용
        p={4}
        h="auto"
        
    >
      {children}
    </Button>
  );
};

export default StyledButton;
