import { createClient } from '@supabase/supabase-js';
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from '@tanstack/react-query';

const supabaseUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;

if (!supabaseUrl) {
    throw new Error("supabaseUrl is required.");
}

if (!supabaseKey) {
    throw new Error("supabaseKey is required.");
}

export const supabase = createClient(supabaseUrl, supabaseKey);

import React from "react";
export const queryClient = new QueryClient();
export function SupabaseProvider({ children }) {
    return React.createElement(QueryClientProvider, { client: queryClient }, children);
}

const fromSupabase = async (query) => {
    const { data, error } = await query;
    if (error) throw new Error(error.message);
    return data;
};

// Hooks for life_cycle_done
export const useLifeCycleDone = () => useQuery({
    queryKey: ['life_cycle_done'],
    queryFn: () => fromSupabase(supabase.from('life_cycle_done').select('*')),
});
export const useAddLifeCycleDone = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newData) => fromSupabase(supabase.from('life_cycle_done').insert([newData])),
        onSuccess: () => {
            queryClient.invalidateQueries('life_cycle_done');
        },
    });
};
export const useUpdateLifeCycleDone = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedData) => fromSupabase(supabase.from('life_cycle_done').update(updatedData).eq('id', updatedData.id)),
        onSuccess: () => {
            queryClient.invalidateQueries('life_cycle_done');
        },
    });
};
export const useDeleteLifeCycleDone = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromSupabase(supabase.from('life_cycle_done').delete().eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries('life_cycle_done');
        },
    });
};

// Hooks for aircall_summary
export const useAircallSummary = () => useQuery({
    queryKey: ['aircall_summary'],
    queryFn: () => fromSupabase(supabase.from('aircall_summary').select('*')),
});
export const useAddAircallSummary = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newData) => fromSupabase(supabase.from('aircall_summary').insert([newData])),
        onSuccess: () => {
            queryClient.invalidateQueries('aircall_summary');
        },
    });
};
export const useUpdateAircallSummary = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedData) => fromSupabase(supabase.from('aircall_summary').update(updatedData).eq('id', updatedData.id)),
        onSuccess: () => {
            queryClient.invalidateQueries('aircall_summary');
        },
    });
};
export const useDeleteAircallSummary = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromSupabase(supabase.from('aircall_summary').delete().eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries('aircall_summary');
        },
    });
};

// Hooks for invoices_dev
export const useInvoicesDev = () => useQuery({
    queryKey: ['invoices_dev'],
    queryFn: () => fromSupabase(supabase.from('invoices_dev').select('*')),
});
export const useAddInvoicesDev = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newData) => fromSupabase(supabase.from('invoices_dev').insert([newData])),
        onSuccess: () => {
            queryClient.invalidateQueries('invoices_dev');
        },
    });
};
export const useUpdateInvoicesDev = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedData) => fromSupabase(supabase.from('invoices_dev').update(updatedData).eq('id', updatedData.id)),
        onSuccess: () => {
            queryClient.invalidateQueries('invoices_dev');
        },
    });
};
export const useDeleteInvoicesDev = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromSupabase(supabase.from('invoices_dev').delete().eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries('invoices_dev');
        },
    });
};

// Hooks for aircall_summary_dev
export const useAircallSummaryDev = () => useQuery({
    queryKey: ['aircall_summary_dev'],
    queryFn: () => fromSupabase(supabase.from('aircall_summary_dev').select('*')),
});
export const useAddAircallSummaryDev = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newData) => fromSupabase(supabase.from('aircall_summary_dev').insert([newData])),
        onSuccess: () => {
            queryClient.invalidateQueries('aircall_summary_dev');
        },
    });
};
export const useUpdateAircallSummaryDev = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedData) => fromSupabase(supabase.from('aircall_summary_dev').update(updatedData).eq('id', updatedData.id)),
        onSuccess: () => {
            queryClient.invalidateQueries('aircall_summary_dev');
        },
    });
};
export const useDeleteAircallSummaryDev = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromSupabase(supabase.from('aircall_summary_dev').delete().eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries('aircall_summary_dev');
        },
    });
};