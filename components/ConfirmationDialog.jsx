export default function ConfirmationDialog({
    isOpen,
    onClose,
    onConfirm,
    title = "Bestätigung",
    message = "Möchten Sie diese Aktion wirklich durchführen?",
    confirmText = "Bestätigen",
    cancelText = "Abbrechen"
    }) {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-medium text-gray-900 mb-4">{title}</h3>
            <p className="text-gray-500 mb-6">{message}</p>
            <div className="flex justify-end space-x-3">
            <button
                onClick={onClose}
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
                {cancelText}
            </button>
            <button
                onClick={onConfirm}
                className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md shadow-sm text-sm"
            >
                {confirmText}
            </button>
            </div>
        </div>
        </div>
    )
}