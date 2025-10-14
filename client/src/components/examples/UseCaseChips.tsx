import UseCaseChips from '../UseCaseChips';

export default function UseCaseChipsExample() {
  return (
    <div className="p-6">
      <UseCaseChips 
        onSelectUseCase={(useCase, prompt) => {
          console.log('Selected use case:', useCase);
          console.log('Prompt:', prompt);
        }} 
      />
    </div>
  );
}
