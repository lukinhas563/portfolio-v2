interface FormContainerProps {
  children?: React.ReactNode;
}

export default function FormContainer({ children }: FormContainerProps) {
  return (
    <div className="bg-[#1A1A1A] border-t border-[#3C3C3C] flex justify-center items-center py-10 px-20 ">
      {children}
    </div>
  );
}
