interface ListNode {
    value: any
    next: ListNode | null
}

function reverseLinkedList(head: ListNode): ListNode {
    let previous = head
    let current = previous.next

    while (current !== null) {
        const temp = current.next
        current.next = previous
        previous = current
        current = temp
    }

    head.next = null
    return previous
}